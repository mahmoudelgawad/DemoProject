using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DemoProject.Entities;
using DemoProject.DTO;
using AutoMapper;
using DemoProject.Entities.DataModel;

namespace DemoProject.BL
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile() {
            CreateMap<UserEntity, UserDto>();
            CreateMap<UserDto, UserEntity>();
            CreateMap<RegisterUserDTO, UserDto>();
        }   
    }

}
