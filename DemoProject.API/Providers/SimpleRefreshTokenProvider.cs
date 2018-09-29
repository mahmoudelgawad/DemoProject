using Microsoft.Owin.Security.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DemoProject.BL;
using DemoProject.Entities.DataModel;
using System.Threading.Tasks;

namespace DemoProject.API
{
    public class SimpleRefreshTokenProvider : IAuthenticationTokenProvider
    {
        public void Create(AuthenticationTokenCreateContext context)
        {
            throw new NotImplementedException();
        }
        public Task CreateAsync(AuthenticationTokenCreateContext context)
        {
            var ClientName = context.Ticket.Properties.Dictionary["as:client_id"];
            if (string.IsNullOrEmpty(ClientName))
            {
                return Task.CompletedTask;
            }
            // we will return this ID to client side not hashed
            var RefreshTokenID = Guid.NewGuid().ToString("n"); // we must Hased the value later
            var RefreshTokenLifeTime = context.OwinContext.Get<string>("as:clientRefreshTokenLifeTime");
            using (AuthenticationBL authBL = new AuthenticationBL())
            {
                var NewRefreshToken = new RefreshToken
                {
                    TokenID = RefreshTokenID,
                    //Subject = context.Ticket.Identity.Claims.FirstOrDefault(c => c.Type == "name").Value,
                    Subject = context.Ticket.Identity.Name,
                    ExpireDate = DateTime.UtcNow.AddMinutes(Convert.ToDouble(RefreshTokenLifeTime)),
                    CreatedDate = DateTime.UtcNow,
                    ClientID = authBL.FindClient(ClientName).ID
                };
                context.Ticket.Properties.IssuedUtc = NewRefreshToken.CreatedDate;
                context.Ticket.Properties.ExpiresUtc = NewRefreshToken.ExpireDate;
                NewRefreshToken.ProtectedTicket = context.SerializeTicket();
                var result = authBL.AddRefreshToken(NewRefreshToken);
                if (result)
                {
                    context.SetToken(NewRefreshToken.TokenID);
                }
            }
            return Task.CompletedTask;
        }
        public void Receive(AuthenticationTokenReceiveContext context)
        {
            throw new NotImplementedException();

        }
        public Task ReceiveAsync(AuthenticationTokenReceiveContext context)
        {
            var allowedOrigin = context.OwinContext.Get<string>("as:clientAllowedOrigin");
            context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { allowedOrigin });
            string hashedTokenId = context.Token; // we must hashed it later
            using (AuthenticationBL authBL = new AuthenticationBL())
            {
                var refreshToken = authBL.GetRefreshToken(hashedTokenId);
                if (refreshToken == null)
                {
                    return Task.CompletedTask;
                }
                context.DeserializeTicket(refreshToken.ProtectedTicket);
                var result = authBL.RemoveRefreshToken(refreshToken);
            }
            return Task.CompletedTask;
        }
    }
}