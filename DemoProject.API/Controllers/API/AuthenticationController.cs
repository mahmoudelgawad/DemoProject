using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using DemoProject.BL;
using DemoProject.DTO;

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
    }
}
