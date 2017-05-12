using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC2017.Controllers
{
    public class TemplatesController : Controller
    {
        // GET: Templates
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult MovieListComponent()
        {
            return PartialView("movieList_component");
        }
        public ActionResult UploadImageComponent()
        {
            return PartialView("uploadImage_component");
        }

        public ActionResult MovieRatingComponent()
        {
            return PartialView("MovieRating_component");
        }
        public ActionResult MainRouterComponent()
        {
            return PartialView("MainRouter_Component");
        }
    }
}