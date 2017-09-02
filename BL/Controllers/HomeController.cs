using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BL.Models;

namespace BL.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            insertData();
            return View();
        }
        [NonAction]
        public void insertData() {
            var context = new testEntities();
            Post PostObj = new Post() {
                Id = 2,
                PublishedDate = DateTime.Now,
                Title="mahmoud ahmed",
                Body="to be best software engineer"
            };
            context.Posts.Add(PostObj);
            context.SaveChanges();
        }
    }
}