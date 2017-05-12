using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace MVC2017.Models
{
    public class ImageProfile
    {
        public string ImageProfileName { get; set; }
        public FileInfo[] FileInfoDetails {get; set;}
    }
}