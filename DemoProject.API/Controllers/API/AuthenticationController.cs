using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using DemoProject.BL;
using DemoProject.DTO;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json.Linq;

namespace DemoProject.API
{
    [RoutePrefix("api/auth")]
    public class AuthenticationController : ApiController
    {
        [Route("register")]
        [HttpPost]
        [ResponseType(typeof(UserDto))]
        public IHttpActionResult Register(RegisterUserDTO registerUserDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            using (AuthenticationBL authBL = new AuthenticationBL())
            {
                var userDTO = authBL.RegisterUser(registerUserDTO);
                if (userDTO == null && userDTO.ID == 0)
                {
                    return BadRequest();
                }
                return Ok(userDTO);
            }
        }

        [Route("register/custom")]
        [HttpPost]
        [ResponseType(typeof(UserDto))]
        public IHttpActionResult CustomRegister(RegisterUserDTO registerUserDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            using (AuthenticationBL authBL = new AuthenticationBL())
            {
                var userDTO = authBL.CustomRegisterUser(registerUserDTO);
                if (userDTO == null && userDTO.ID == 0)
                {
                    return BadRequest();
                }
                return Ok(userDTO);
            }
        }

        [Route("login")]
        [HttpGet]
        [ResponseType(typeof(UserDto))]
        public IHttpActionResult Login([FromUri] UserLoginDTO userLoginDTO)
        {
            using (AuthenticationBL authBL = new AuthenticationBL())
            using (UserLogic userLogic = new UserLogic())
            {
                var userIdintity = authBL.FindUser(userLoginDTO);
                if (userIdintity == null)
                {
                    return BadRequest();
                }
                var userDTO = userLogic.GetUserByAuthenticationID(userIdintity.Id);
                if (userDTO == null)
                {
                    return BadRequest();
                }
                return Ok(userDTO);
            }
        }

        [Route("login/custom")]
        [HttpGet]
        [ResponseType(typeof(UserDto))]
        public IHttpActionResult CustomLogin([FromUri] UserLoginDTO userLoginDTO)
        {
            using (AuthenticationBL authBL = new AuthenticationBL())
            using (UserLogic userLogic = new UserLogic())
            {
                var userDTO = authBL.FindUserBySaltHash(userLoginDTO);
                if (userDTO == null)
                {
                    return BadRequest();
                }
                return Ok(userDTO);
            }
        }

        [OverrideAuthentication]
        [HostAuthentication(Microsoft.AspNet.Identity.DefaultAuthenticationTypes.ExternalCookie)]
        [AllowAnonymous]
        [Route("login/external")]
        [HttpGet]
        public IHttpActionResult ExternalLogin(string provider, string error = null)
        {
            string redirectUri = string.Empty;
            if (error != null)
            {
                return BadRequest(Uri.EscapeDataString(error));
            }
            if (!User.Identity.IsAuthenticated)
            {
                return new ChallengeResult(provider, this);
            }
            var redirectValidationResult = ValidateClientAndRedirectUri(this.Request, ref redirectUri);
            if (!string.IsNullOrWhiteSpace(redirectValidationResult))
            {
                return BadRequest(redirectValidationResult);
            }

            ExternalLoginData externalLoginData = ExternalLoginData.FromIdentity(User.Identity as ClaimsIdentity);
            if (externalLoginData == null)
            {
                return InternalServerError();
            }

            if (externalLoginData.LoginProvider != provider)
            {
                Authentication.SignOut(DefaultAuthenticationTypes.ExternalCookie);
                return new ChallengeResult(provider, this);
            }

            IdentityUser identityUser;
            using (AuthenticationBL authBL = new AuthenticationBL())
            {
                identityUser = authBL.FindUser(new UserLoginInfo(externalLoginData.LoginProvider, externalLoginData.ProviderKey));
            }
            bool hasRegistered = identityUser != null;

            redirectUri = string.Format("{0}#ExternalAccessToken={1}&Provider={2}&HasLocalAccount={3}&UserName={4}",
                                           redirectUri,
                                           externalLoginData.ExternalAccessToken,
                                           externalLoginData.LoginProvider,
                                           hasRegistered.ToString(),
                                           externalLoginData.UserName);

            return Redirect(redirectUri);
        }

        [AllowAnonymous]
        [Route("register/external")]
        [HttpPost]
        [ResponseType(typeof(JObject))]
        public async Task<IHttpActionResult> ExternalRegister(ExternalRegisterUserDTO externalRegisterUserDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var verifiedAccessToken = await VerifyExternalAccessToken(externalRegisterUserDTO.Provider, externalRegisterUserDTO.ExternalAccessToken);
            if (verifiedAccessToken == null)
            {
                return BadRequest("Invalid Provider or External Access Token");
            }
            using (AuthenticationBL AuthBL = new AuthenticationBL())
            {
                var userIdintity = AuthBL.FindUser(new UserLoginInfo(externalRegisterUserDTO.Provider, verifiedAccessToken.user_id));
                if (userIdintity != null)
                {
                    return BadRequest("External user is already registered");
                }

                var userDTO = AuthBL.RegisterExternalUser(externalRegisterUserDTO, verifiedAccessToken);
                if (userDTO == null || userDTO.ID == 0)
                {
                    return InternalServerError();
                }

                var LocalAccessToken = GenerateResponseLocalAccessToken(externalRegisterUserDTO.UserName);
                return Ok(LocalAccessToken);
            }
        }

        [AllowAnonymous]
        [Route("token/external")]
        [HttpGet]
        public async Task<IHttpActionResult> GetLocalAccessToken(string Provider, string ExternalAccessToken)
        {

            if (string.IsNullOrWhiteSpace(Provider) || string.IsNullOrWhiteSpace(ExternalAccessToken))
            {
                return BadRequest("Provider or external access token is not sent");
            }

            var verifiedAccessToken = await VerifyExternalAccessToken(Provider, ExternalAccessToken);
            if (verifiedAccessToken == null)
            {
                return BadRequest("Invalid Provider or External Access Token");
            }


            using (AuthenticationBL authBL = new AuthenticationBL())
            {

                IdentityUser user = authBL.FindUser(new UserLoginInfo(Provider, verifiedAccessToken.user_id));

                if (user == null)
                {
                    return BadRequest("External user is not registered");
                }

                //generate access token response
                var LocalAccessToken = GenerateResponseLocalAccessToken(user.UserName);

                return Ok(LocalAccessToken);
            }

        }

        #region Helper Methods
        private string ValidateClientAndRedirectUri(HttpRequestMessage Request, ref string redirectUriOutput)
        {
            Uri redirectUri;

            var redirectUriString = GetQueryString(Request, "redirect_uri");

            if (string.IsNullOrWhiteSpace(redirectUriString))
            {
                return "redirect_uri is required";
            }

            bool validUri = Uri.TryCreate(redirectUriString, UriKind.Absolute, out redirectUri);

            if (!validUri)
            {
                return "redirect_uri is invalid";
            }

            var clientId = GetQueryString(Request, "client_id");

            if (string.IsNullOrWhiteSpace(clientId))
            {
                return "client_Id is required";
            }

            //var client = _repo.FindClient(clientId);

            //if (client == null)
            //{
            //    return string.Format("Client_id '{0}' is not registered in the system.", clientId);
            //}

            //if (!string.Equals(client.AllowedOrigin, redirectUri.GetLeftPart(UriPartial.Authority), StringComparison.OrdinalIgnoreCase))
            //{
            //    return string.Format("The given URL is not allowed by Client_id '{0}' configuration.", clientId);
            //}

            redirectUriOutput = redirectUri.AbsoluteUri;

            return string.Empty;

        }

        private string GetQueryString(HttpRequestMessage Request, string Key)
        {
            var queryStrings = Request.GetQueryNameValuePairs();

            if (queryStrings == null) return null;

            var match = queryStrings.FirstOrDefault(keyValue => string.Compare(keyValue.Key, Key, true) == 0);

            if (string.IsNullOrEmpty(match.Value)) return null;

            return match.Value;
        }

        private async Task<ParsedExternalAccessTokenDTO> VerifyExternalAccessToken(string provider, string accessToken)
        {
            ParsedExternalAccessTokenDTO parsedToken = null;
            var verifyTokenEndPoint = "";
            if (provider == "Facebook")
            {
                //You can get it "appToken" from here: https://developers.facebook.com/tools/accesstoken/
                //More about debug_tokn here: http://stackoverflow.com/questions/16641083/how-does-one-get-the-app-access-token-for-debug-token-inspection-on-facebook
                var appToken = "459339154559822|vW0H-ank3v35YXOT7eCe7RX8Sl0";
                verifyTokenEndPoint = string.Format("https://graph.facebook.com/debug_token?input_token={0}&access_token={1}", accessToken, appToken);
            }
            else if (provider == "Google")
            {
                verifyTokenEndPoint = string.Format("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token={0}", accessToken);
            }
            else
            {
                return null;
            }

            var client = new HttpClient();
            var uri = new Uri(verifyTokenEndPoint);
            var response = await client.GetAsync(uri);
            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();

                dynamic jObj = (JObject)Newtonsoft.Json.JsonConvert.DeserializeObject(content);

                parsedToken = new ParsedExternalAccessTokenDTO();

                if (provider == "Facebook")
                {
                    parsedToken.user_id = jObj["data"]["user_id"];
                    parsedToken.app_id = jObj["data"]["app_id"];

                    if (!string.Equals(Startup.facebookAuthOptions.AppId, parsedToken.app_id, StringComparison.OrdinalIgnoreCase))
                    {
                        return null;
                    }
                }
                else if (provider == "Google")
                {
                    parsedToken.user_id = jObj["user_id"];
                    parsedToken.app_id = jObj["audience"];

                    if (!string.Equals(Startup.googleAuthOptions.ClientId, parsedToken.app_id, StringComparison.OrdinalIgnoreCase))
                    {
                        return null;
                    }

                }

            }
            return parsedToken;
        }

        private JObject GenerateResponseLocalAccessToken(string UserName)
        {
            var tokenExpiration = TimeSpan.FromDays(1);
            ClaimsIdentity identity = new ClaimsIdentity(OAuthDefaults.AuthenticationType);//Bearer
            identity.AddClaim(new Claim(ClaimTypes.Name, UserName));
            identity.AddClaim(new Claim(ClaimTypes.Role, "user"));
            var props = new AuthenticationProperties()
            {
                IssuedUtc = DateTime.UtcNow,
                ExpiresUtc = DateTime.UtcNow.Add(tokenExpiration),
            };
            var ticket = new AuthenticationTicket(identity, props);
            var accessToken = Startup.OAuthBearerOptions.AccessTokenFormat.Protect(ticket);
            JObject tokenResponse = new JObject(
                                        new JProperty("username", UserName),
                                        new JProperty("access_token", accessToken),
                                        new JProperty("token_type", "bearer"),
                                        new JProperty("expires_in", tokenExpiration.TotalSeconds.ToString()),
                                        new JProperty(".issued", ticket.Properties.IssuedUtc.ToString()),
                                        new JProperty(".expires", ticket.Properties.ExpiresUtc.ToString())
                                        );
            return tokenResponse;
        }
        #endregion

        #region Types
        private IAuthenticationManager Authentication
        {
            get { return Request.GetOwinContext().Authentication; }
        }
        private class ExternalLoginData
        {
            public string LoginProvider { get; set; }
            public string ProviderKey { get; set; }
            public string UserName { get; set; }
            public string ExternalAccessToken { get; set; }

            public static ExternalLoginData FromIdentity(ClaimsIdentity identity)
            {
                if (identity == null)
                {
                    return null;
                }

                Claim providerKeyClaim = identity.FindFirst(ClaimTypes.NameIdentifier);

                if (providerKeyClaim == null || String.IsNullOrEmpty(providerKeyClaim.Issuer) || String.IsNullOrEmpty(providerKeyClaim.Value))
                {
                    return null;
                }

                if (providerKeyClaim.Issuer == ClaimsIdentity.DefaultIssuer)
                {
                    return null;
                }

                return new ExternalLoginData
                {
                    LoginProvider = providerKeyClaim.Issuer,
                    ProviderKey = providerKeyClaim.Value,
                    UserName = identity.FindFirstValue(ClaimTypes.Name),
                    ExternalAccessToken = identity.FindFirstValue("ExternalAccessToken"),
                };
            }
        }
        #endregion



    }
}

/*
 example:
 http://ngauthenticationapi.azurewebsites.net/api/Account/ExternalLogin?provider=Google&response_type=token&client_id=ngAuthApp&redirect_uri=http://ngauthenticationweb.azurewebsites.net/authcomplete.html
     */
