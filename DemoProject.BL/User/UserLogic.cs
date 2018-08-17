using DemoProject.DTO;
using DemoProject.Entities.DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;

namespace DemoProject.BL
{
    public class UserLogic : BaseLogic
    {
        public UserLogic(UserDto UserDtoObj = null, string AuthID = "")
        {
            _userDto = UserDtoObj;
            _authID = AuthID;
        }
        #region Private Members
        private UserDto _userDto;
        private UserEntity _userEntity;
        private string _authID;
        #endregion

        #region Public Members
        public UserDto UserDtoObj
        {
            get
            {
                if (_userDto is null)
                {
                    _userDto = new UserDto();
                }
                return _userDto;
            }
        }
        #endregion

        #region Methods
        public IEnumerable<UserDto> GetUsers()
        {
            return context.UserEntities.Select(MapperHelper.ToUserDto);
        }

        public UserDto GetUser(int ID)
        {
            UserEntity userEntity = context.UserEntities.SingleOrDefault(u => u.ID == ID);
            return MapperHelper.ToUserDto(userEntity);
        }

        public UserDto GetUserByAuthenticationID(string AuthID)
        {
            UserEntity userEntity = context.UserEntities.SingleOrDefault(u => u.AuthID == AuthID);
            return MapperHelper.ToUserDto(userEntity);
        }

        public UserDto Save()
        {
            if (UserDtoObj.ID == 0)
            {
                return Create(UserDtoObj);
            }
            else
            {
                return Update(UserDtoObj);
            }
        }

        public Boolean Remove(int ID)
        {
            var user = context.UserEntities.SingleOrDefault(u => u.ID == ID);
            if (user == null)
            {
                return false;
            }
            context.UserEntities.Remove(user);
            context.SaveChanges();
            return true;
        }
        #endregion

        #region Helper Methods
        private UserDto Create(UserDto userDto)
        {
            var userEntity = Mapper.Map<UserDto, UserEntity>(userDto);
            userEntity.AuthID = _authID;
            userEntity.CreatedDate = DateTime.Now;
            userEntity = context.UserEntities.Add(userEntity);
            context.SaveChanges();
            userDto = MapperHelper.ToUserDto(userEntity);
            return userDto;
        }
        private UserDto Update(UserDto userDto)
        {
            var userEntity = context.UserEntities.SingleOrDefault(u => u.ID == userDto.ID);
            if (userEntity == null)
            {
                return null;
            }
            userEntity = MapperHelper.ToUser(userDto);
            context.SaveChanges();
            return userDto;
        }
        #endregion


    }
}
