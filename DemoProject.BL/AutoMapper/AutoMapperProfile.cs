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
            CreateMap<UserEntity,UserDto>();
            CreateMap<UserDto,UserEntity>()
                .ForMember(dest => dest.Username,opt => opt.MapFrom(src => src.UserName));
            CreateMap<RegisterUserDTO, UserDto>();
            CreateMap<ExternalRegisterUserDTO, UserDto>()
         .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.UserName));
        }   
    }

}
