using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DemoProject.BL;

namespace DemoProject.API.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";
           // SetData();

            return View();
        }
        public void SetData() {
            //PostEntity PostObj = new PostEntity()
            //{
            //    Id = 2,
            //    CreatedDate = DateTime.Now,
            //    Title = "Post Title",
            //    Body = "to be good developer",
            //    Rate=2
            //};
            //Post PostBLObj = new Post(PostObj);
            //PostBLObj.SaveChanges();
        }
    }
}
