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
            string[] AssemplyNames = new string[] { "TPCorp.TPApi.Clients" };
            ConvertProcessBL ObjConvert = new ConvertProcessBL(AssemplyNames);
            ObjConvert.Start();
        }
    }
}
