using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Microsoft.Owin;
using Microsoft.Owin.Security.Facebook;
using Microsoft.Owin.Security.Google;
using Microsoft.Owin.Security.OAuth;
using Owin;

[assembly: OwinStartup(typeof(DemoProject.API.Startup))]
namespace DemoProject.API
{
    public class Startup
    {
        #region Variables
        public static OAuthBearerAuthenticationOptions OAuthBearerOptions { get; private set; }
        public static GoogleOAuth2AuthenticationOptions googleAuthOptions { get; private set; }
        public static FacebookAuthenticationOptions facebookAuthOptions { get; private set; }
        #endregion

        #region Methods
        public void Configuration(IAppBuilder app)
        {
            HttpConfiguration config = new HttpConfiguration();
            ConfigureOAuth(app);
            WebApiConfig.Register(config);
            app.UseWebApi(config);
            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);
        }

        #endregion

        #region Helper Methods
        public void ConfigureOAuth(IAppBuilder app)
        {
            OAuthAuthorizationServerOptions OAuthOptions = new OAuthAuthorizationServerOptions()
            {
                AllowInsecureHttp = true,
                TokenEndpointPath = new PathString("/api/auth/token"),
                AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(5),
                Provider = new SimpleAuthorizationServerProvider(),
                RefreshTokenProvider = new SimpleRefreshTokenProvider()

            };
            app.UseOAuthAuthorizationServer(OAuthOptions);
            OAuthBearerOptions = new OAuthBearerAuthenticationOptions();
            app.UseOAuthBearerAuthentication(OAuthBearerOptions);

            app.UseExternalSignInCookie(Microsoft.AspNet.Identity.DefaultAuthenticationTypes.ExternalCookie); // "ExternalCookie"
            googleAuthOptions = new GoogleOAuth2AuthenticationOptions() {
                ClientId = "1072793107950-j9teb45tjfc8kbp0pbk4lm39sm2j4u5a.apps.googleusercontent.com",
                ClientSecret = "5h-3cplAsDC182MQ_tAgCqg-",
                Provider = new GoogleAuthProvider(),
            };
            app.UseGoogleAuthentication(googleAuthOptions);
            facebookAuthOptions = new FacebookAuthenticationOptions()
            {
                AppId = "459339154559822",
                AppSecret = "ff6d79e9be3c4a41dc9ccfc2b519f857",
                Provider = new FacebookAuthProvider()
            };
            app.UseFacebookAuthentication(facebookAuthOptions);
        }
        #endregion


    }
}