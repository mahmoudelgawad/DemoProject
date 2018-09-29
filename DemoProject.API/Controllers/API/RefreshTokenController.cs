using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using DemoProject.BL;
using DemoProject.Entities.DataModel;
using System.Web;

namespace DemoProject.API
{
    [RoutePrefix("api/refreshtoken")]
    public class RefreshTokenController : ApiController
    {

        [Authorize(Users ="admin")]
        [Route("")]
        [HttpGet]
        [ResponseType(typeof(List<RefreshToken>))]
        public IHttpActionResult GetRefreshTokens()
        {
            using (RefreshTokenBL RefreshTokenBLObj = new RefreshTokenBL())
            {
                return Ok(RefreshTokenBLObj.GetAll());
            }
        }
    }
}
