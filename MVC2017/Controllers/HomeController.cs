using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MVC2017.Models;
using System.IO;

namespace MVC2017.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            //ImageProfile ObjImageProfile = new ImageProfile();
            //ObjImageProfile.FileInfoDetails = new DirectoryInfo(Server.MapPath("~/content/images")).GetFiles();
            //return View(ObjImageProfile);
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }
   
        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        [NonAction]
        public void SomeMethod()
        {
            Response.Write("Hello I private");
        }
    }
}