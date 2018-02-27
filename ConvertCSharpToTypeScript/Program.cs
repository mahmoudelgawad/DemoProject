using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ConvertCSharbToTypeScript.BLL;
using System.Diagnostics;

namespace ConvertCSharpToTypeScript
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                //string[] AssemplyNames = new string[] { "TPCorp.TPApi.Clients", "Snow.Erp", "Snow.Erp.Api" , "TPCorp.AppLib" };
                // Dictionary for Assemplies names with specific namespaces or without
                Dictionary<string, List<string>> AssemplyNames = new Dictionary<string, List<string>>();
                AssemplyNames.Add("DemoProject.Entities", new List<string> {
                "DemoProject.Entities.DataModel"
                });

                //AssemplyNames.Add("TPCorp.AppLib", new List<string> {
                //    "TPCorp.AppLib.FileReceivers",
                //    "TolsIT.TP.WebPrototypeLib.Api.DataTypes",
                //    "TolsIT.TP.WebPrototypeLib.Views"
                //});

                //Ignored List of TypedNames (as 'Value') with specific AssemplyNames in (as 'Key')
                Dictionary<string, List<string>> IgnoredTypeNames = new Dictionary<string, List<string>>();
                //IgnoredTypeNames.Add("Snow.Erp.Api.Session", new List<string>() { "InstanceDetailsAux1" });


                ConvertProcessBL ObjConvert = new ConvertProcessBL(AssemplyNames, "AppModule", IgnoredTypeNames);
                ObjConvert.Start();
                Console.WriteLine("Convert Process Done...!");
            }
            catch (Exception ObjException)
            {
                StackTrace ObjStackTrace = new StackTrace(ObjException, true);
                StackFrame ObjStackFrame = ObjStackTrace.GetFrames().First();
                int ErrorLineNumber = ObjStackFrame.GetFileLineNumber();
                string FileName = ObjStackFrame.GetFileName();
                Console.WriteLine("ERROR - > " + ObjException.Message +"\r\n"+
                    FileName+", line:"+ErrorLineNumber);
            }

            Console.WriteLine("Press Any Key...");
            Console.ReadKey();

        }
    }
}
