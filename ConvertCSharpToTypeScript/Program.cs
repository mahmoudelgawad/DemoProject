using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ConvertCSharbToTypeScript.BLL;

namespace ConvertCSharpToTypeScript
{
    class Program
    {
        static void Main(string[] args)
        {
            //string[] AssemplyNames = new string[] { "TPCorp.TPApi.Clients", "Snow.Erp", "Snow.Erp.Api" , "TPCorp.AppLib" };
            // Dictionary for Assemplies names with specific namespaces or without
            Dictionary<string, List<string>> AssemplyNames = new Dictionary<string, List<string>>();
            AssemplyNames.Add("TPCorp.TPApi.Clients", null);
            AssemplyNames.Add("Snow.Erp", null);
            AssemplyNames.Add("Snow.Erp.Api.Session", null);
            AssemplyNames.Add("Snow.Erp.Api", null);
            AssemplyNames.Add("Snow.Erp.System", null);
            AssemplyNames.Add("TPCorp.TPApi.Basis", null);
            AssemplyNames.Add("Snow.Erp.Api.SystemMgmt", null);
            AssemplyNames.Add("TPCorp.AppLib", new List<string> {
                "TPCorp.AppLib.FileReceivers",
                "TolsIT.TP.WebPrototypeLib.Api.DataTypes",
                "TolsIT.TP.WebPrototypeLib.Views"
            });
            AssemplyNames.Add("TPCorp.App.CoreDev", null);
            AssemplyNames.Add("TPCorp.TPApi.Ui", null);
            AssemplyNames.Add("Snow.Erp.Api.Basis", null);
            //Ignored List of TypedNames (as 'Value') with specific AssemplyNames in (as 'Key')
            Dictionary<string,List<string>> IgnoredTypeNames = new Dictionary<string,List<string>>();
            IgnoredTypeNames.Add("Snow.Erp.Api.Session", new List<string>() { "InstanceDetailsAux1" });
            IgnoredTypeNames.Add("TPCorp.App.CoreDev",new List<string>() { "IDevApiApp", "ApiCallCtx" });
            IgnoredTypeNames.Add("TPCorp.TPApi.Clients", new List<string>() { "Setup_CompanyEntity" });//exist with same name in TPCorp.AppLib.ts

            ConvertProcessBL ObjConvert = new ConvertProcessBL(AssemplyNames, "TPApp", IgnoredTypeNames);
            ObjConvert.Start();
            Console.WriteLine("Convert Process Done...!");
            Console.WriteLine("Press Any Key...");
            Console.ReadKey();
        }
    }
}
