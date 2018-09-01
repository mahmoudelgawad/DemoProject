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

namespace DemoProject.API
{
    public class SimpleAuthorizationServerProvider: OAuthAuthorizationServerProvider
    {
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
            
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {

            context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { "*" });

            using (AuthenticationBL authBL = new AuthenticationBL())
            {
                // using Asp.net identity
                //IdentityUser user = authBL.FindUser(new UserLoginDTO { Username=context.UserName, Password = context.Password});

                //using custome user Salt hash ecryption
                var user = authBL.FindUserBySaltHash(new UserLoginDTO { Username = context.UserName, Password = context.Password });

                if (user == null)
                {
                    context.SetError("invalid_grant", "The user name or password is incorrect.");
                    return;
                }
            }

            var identity = new ClaimsIdentity(context.Options.AuthenticationType);
            identity.AddClaim(new Claim("sub", context.UserName));
            identity.AddClaim(new Claim("role", "user"));

            context.Validated(identity);

        }
    }
}