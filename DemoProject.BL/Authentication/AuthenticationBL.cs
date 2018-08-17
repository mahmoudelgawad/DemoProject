using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using DemoProject.Entities;
using DemoProject.DTO;

namespace DemoProject.BL
{
    public class AuthenticationBL : BaseLogic
    {
        #region Private Members
        private UserManager<IdentityUser> _userManager;
        #endregion
        public AuthenticationBL()
        {
            _userManager = new UserManager<IdentityUser>(new UserStore<IdentityUser>());
        }

        #region methods
        public UserDto RegisterUser(RegisterUserDTO registerUserDTO)
        {
            //Save asp idintity
            IdentityUser identityUser = new IdentityUser(registerUserDTO.Username);
            identityUser.Email = registerUserDTO.Email;
            var result = _userManager.Create(identityUser, registerUserDTO.Password);
            if (!result.Succeeded)
            {
                return null;
            }
            //save user
            var userDto = MapperHelper.ToUserDto(registerUserDTO);
            using (UserLogic userLogic = new UserLogic(userDto,identityUser.Id))
            {
                userDto = userLogic.Save();
            }
            return userDto;
        }

        public IdentityUser FindUser(UserLoginDTO userloginDTO)
        {
            var user = _userManager.Find(userloginDTO.Username, userloginDTO.Password);
            return user;
        }
        #endregion
        public override void Dispose()
        {
            _userManager.Dispose();
            base.Dispose();
        }
    }
}
