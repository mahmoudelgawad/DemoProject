using AutoMapper;
using DemoProject.DTO;
using DemoProject.Entities.DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoProject.BL
{
    public class MapperHelper
    {
        public static UserEntity ToUser(UserDto userDto)
        {
            return Mapper.Map<UserDto, UserEntity>(userDto);
        }
        public static UserDto ToUserDto(UserEntity userEntity)
        {
            return Mapper.Map<UserEntity, UserDto>(userEntity);
        }
        public static UserDto ToUserDto(RegisterUserDTO registerUserDTO)
        {
            return Mapper.Map<RegisterUserDTO, UserDto>(registerUserDTO);
        }
    }
}
