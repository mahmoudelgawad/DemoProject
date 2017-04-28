using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;

namespace MVC2017.Controllers
{
    public class APINormalController : Controller
    {
        // GET: APINormal
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult GetMovies()
        {
            using (StreamReader sr = new StreamReader(Server.MapPath("~/App_Data/movies.json")))
            {
                var result = sr.ReadToEnd();
                return Content(result, "application/json");
            }
        }
    }
}