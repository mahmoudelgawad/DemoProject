using System;
using System.Collections.Generic;
using System.Text;
using ConvertCSharbToTypeScript.Helpers;

namespace ConvertCSharbToTypeScript.BLL
{
    class ConvertProcessBL
    {
        string[] AssemplyNames;
        //ConvertProcessBL constructor take AsemplyNames as strings to start reflecting with
        public ConvertProcessBL(string[] AssemplyNames)
        {
            this.AssemplyNames = AssemplyNames;
        }

        #region Functions
        //Start function start reflecting process
        public void Start()
        {
            foreach (string AssemblyName in AssemplyNames)
            {
                Convert(AssemblyName);
            }
        }
        //Convert function take AssemblyName as string to start converting with
        void Convert(string AssemblyName)
        {
            Type[] Types = Helper.ReflectDLLName(AssemblyName);
            foreach (Type ObjType in Types)
            {
                Helper.ExportToTypeScriptFile(ObjType);
            }
        }
        #endregion
    }
}
