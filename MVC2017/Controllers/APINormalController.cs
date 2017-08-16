using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.IO;
using System.Net.Http;
using System.Net;
using ImageResizer;
using System.Drawing;
using System.Threading.Tasks;
using HttpMultipartParser;

namespace MVC2017.Controllers
{

    [RoutePrefix("api/apinormal")]
    public class APINormalController : ApiController
    {
        // GET: APINormal
        [Route("getmovies")]
        [HttpGet]
        public HttpResponseMessage GetMovies()
        {
            using (StreamReader sr = new StreamReader(System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/movies.json")))
            {
                var result = sr.ReadToEnd();
                return Request.CreateResponse(HttpStatusCode.OK, result, "application/json");
            }
        }
        [Route("postfiletoserver")]
        [HttpPost]
        public HttpResponseMessage PostFileToServer()
        {
            if (!Request.Content.IsMimeMultipartContent())
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError,"");
            } 
            var MultiPartdata = Request.Content.ReadAsByteArrayAsync().Result;
            var ObjStream = new MemoryStream(MultiPartdata);
            var multi = new MultipartFormDataParser(ObjStream);

            ResizeSettings resizeSetting = new ResizeSettings
            {
                Width = 50,
                Height = 50,
                Format = "jpg"
            };
            MemoryStream NewStream = new MemoryStream();
            ImageBuilder.Current.Build(multi.Files.First(), NewStream, resizeSetting);
            var req = Request.CreateResponse(HttpStatusCode.OK, NewStream.ToArray());

            return req;
        }
    }
}