using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DemoProject.DTO
{
    public class UserDto
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string UserName { get; set; }
        public Nullable<byte> Age { get; set; }
        public string Address { get; set; }
        public System.DateTime CreatedDate { get; set; }
        public string Email { get; set; }
    }
}