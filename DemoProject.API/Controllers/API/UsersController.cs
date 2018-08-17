
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
    [RoutePrefix("api/users")]
    public class UsersController : ApiController
    {

        public UsersController()
        {

        }

        /// <summary>
        /// Get all users
        /// </summary>
        /// <returns>list of UserDto</returns>
        [Route("")]
        [Authorize]
        [HttpGet]
        [ResponseType(typeof(IEnumerable<UserDto>))]
        public IHttpActionResult Users()
        {
            UserLogic userLogic = new UserLogic();
            return Ok(userLogic.GetUsers());
        }

        /// <summary>
        /// Get user by ID from 
        /// </summary>
        /// <param name="ID">user ID</param>
        /// <returns>UsertDto object</returns>
        [Route("{id}")]
        [HttpGet]
        [ResponseType(typeof(UserDto))]
        public IHttpActionResult GetUser(int ID)
        {
            UserLogic userlogic = new UserLogic();
            var userDto = userlogic.GetUser(ID);
            if (userDto == null)
            {
                NotFound();
            }
            return Ok(userDto);

        }

        /// <summary>
        /// Create new user
        /// </summary>
        /// <param name="userDto"> new UserDto object ID is null or 0 value</param>
        /// <returns>created UserDto object with ID value and location URI</returns>
        [Route("")]
        [HttpPost]
        [ResponseType(typeof(UserDto))]
        public IHttpActionResult CreateUser(UserDto userDto)
        {
            if (!ModelState.IsValid)
            {
                BadRequest();
            }
            UserLogic userLogic = new UserLogic(userDto);
            var userDtoInDB = userLogic.Save();
            return Created(Request.RequestUri+"/"+userDtoInDB.ID,userDtoInDB);
        }

        /// <summary>
        /// update specific UserDto 
        /// </summary>
        /// <param name="userDto"> UserDto object </param>
        [Route("")]
        [HttpPut]
        public IHttpActionResult UpdateUser(UserDto userDto)
        {
            if (!ModelState.IsValid)
            {
                BadRequest();
            }
            UserLogic userLogic = new UserLogic(userDto);
            if (userLogic.Save() == null)
            {
                NotFound();
            }
           return  Ok();
        }

        /// <summary>
        /// Delete user by ID
        /// </summary>
        /// <param name="ID">user ID</param>
        [Route("{id}")]
        [HttpDelete]
        public IHttpActionResult DeleteUser(int ID)
        {
            UserLogic userLogic = new UserLogic();
            if (!userLogic.Remove(ID))
            {
                NotFound();
            }
            return Ok();
        }
    }
}
