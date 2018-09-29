using Microsoft.Owin.Security.OAuth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using DemoProject.BL;
using DemoProject.DTO;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Security.Claims;
using DemoProject.Entities.DataModel;
using DemoProject.Entities.CustomeDataModel;
using Microsoft.Owin.Security;

namespace DemoProject.API
{
    public class SimpleAuthorizationServerProvider : OAuthAuthorizationServerProvider
    {
        public override Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            string ClientID = string.Empty;
            string ClientSecret = string.Empty;
            Client client = null;
            if (!context.TryGetBasicCredentials(out ClientID, out ClientSecret))
            {
                context.TryGetFormCredentials(out ClientID, out ClientSecret);
            }

            if (context.ClientId == null)
            {
                context.Validated();
                //context.SetError("invalid_clientId", "ClientId should be sent.");
                return Task.CompletedTask;
            }

            using (AuthenticationBL authBL = new AuthenticationBL())
            {
                client = authBL.FindClient(context.ClientId);
            }

            if (client == null)
            {
                context.SetError("invalid_ClientID", string.Format("Client '{0}' is not registered in the system", context.ClientId));
                return Task.CompletedTask;
            }

            if (client.ApplicationType == (int)ApplicationTypes.NativeConfidential)
            {
                if (string.IsNullOrEmpty(ClientSecret))
                {
                    context.SetError("invalid_ClientID", "Client Secrete should be sent in \"client_secret\".");
                    return Task.CompletedTask;
                }
                else
                {
                    // we have to hash  for "ClientSecret" i think
                    if (client.Secret != ClientSecret)
                    {
                        context.SetError("invalid_ClientID", "Client Secrete is invalid.");
                        return Task.CompletedTask;
                    }
                }
            }

            if (!client.IsActive)
            {
                context.SetError("invalid_ClientID", "Client is inactive.");
                return Task.CompletedTask;
            }

            context.OwinContext.Set<string>("as:clientAllowedOrigin", client.AllowOrigin);
            context.OwinContext.Set<string>("as:clientRefreshTokenLifeTime", client.RefreshTokenLifeTime.ToString());

            context.Validated();
            return Task.CompletedTask;
        }

        public override Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            var allowedOrigin = context.OwinContext.Get<string>("as:clientAllowedOrigin");

            // I think if we want  allow test form postman
            if (allowedOrigin == null)
            {
                allowedOrigin = "*";
            }

            context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { allowedOrigin });

            using (AuthenticationBL authBL = new AuthenticationBL())
            {
                // using Asp.net identity
                //IdentityUser user = authBL.FindUser(new UserLoginDTO { Username=context.UserName, Password = context.Password});

                //using custome user Salt hash ecryption
                var user = authBL.FindUserBySaltHash(new UserLoginDTO { Username = context.UserName, Password = context.Password });

                if (user == null)
                {
                    context.SetError("invalid_grant", "The user name or password is incorrect.");
                    return Task.CompletedTask;
                }
            }

            var identity = new ClaimsIdentity(context.Options.AuthenticationType);
            identity.AddClaim(new Claim(ClaimTypes.Name, context.UserName));
            identity.AddClaim(new Claim(ClaimTypes.Role, "user"));

            var props = new AuthenticationProperties(new Dictionary<string, string> {
                { "as:client_id",(context.ClientId == null)?string.Empty:context.ClientId},
                { "username",context.UserName}
            });

            var ticket = new AuthenticationTicket(identity, props);


            context.Validated(ticket); // the access token will be generated here

            return Task.CompletedTask;
        }

        public override Task TokenEndpoint(OAuthTokenEndpointContext context)
        {
            foreach (KeyValuePair<string, string> property in context.Properties.Dictionary)
            {
                context.AdditionalResponseParameters.Add(property.Key, property.Value);
            }
            return Task.FromResult<object>(null);
        }

        public override Task GrantRefreshToken(OAuthGrantRefreshTokenContext context)
        {
            var originalClient = context.Ticket.Properties.Dictionary["as:client_id"];
            var currentClient = context.ClientId;
            if (originalClient != currentClient)
            {
                context.SetError("invalid_clientId", "Refresh token is issued to a different clientId.");
                return Task.FromResult<object>(null);
            }
            var newIdentity = new ClaimsIdentity(context.Ticket.Identity);
            newIdentity.AddClaim(new Claim("newclaim", "newvlaue"));

            var newTicket = new AuthenticationTicket(newIdentity, context.Ticket.Properties);
            context.Validated(newTicket);
            return Task.FromResult<object>(null);
        }
    }
}