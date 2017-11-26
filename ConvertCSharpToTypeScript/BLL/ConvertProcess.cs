using System;
using System.Collections.Generic;
using System.Text;
using ConvertCSharbToTypeScript.Helpers;

namespace ConvertCSharbToTypeScript.BLL
{
    class ConvertProcessBL
    {
        Dictionary<string, List<string>> AssemplyNames; //Key:Assembly Name, Values: namespaces list
        Dictionary<string,List<string>> IgnoredTypeNames; //Ignored List of TypedNames (as 'Value') with specific AssemplyNames in (as 'Key')
        string ModuleName;
        //ConvertProcessBL constructor take AsemplyNames as strings to start reflecting with
        public ConvertProcessBL(Dictionary<string, List<string>> ValidAssemplyNames, string ModuleName, Dictionary<string, List<string>> IgnoredTypeNames = null)
        {
            this.AssemplyNames = ValidAssemplyNames;
            this.ModuleName = ModuleName;
            this.IgnoredTypeNames = IgnoredTypeNames;
        }

        #region Functions
        //Start function start reflecting process
        public void Start()
        {
            foreach (var AssemblyName in AssemplyNames)
            {
                Convert(AssemblyName, IgnoredTypeNames);
            }
        }
        //Convert function take AssemblyName as KeyValuePair to start converting with
        void Convert(KeyValuePair<string, List<string>> AssemblyName, Dictionary<string, List<string>> IgnoredTypeNames =null)
        {
            StringBuilder FileContent = new StringBuilder();
            FileContent.Append("module " + ModuleName + "{" + "\r\n");
            Type[] Types = Helper.ReflectDLLName(AssemblyName.Key);
            foreach (Type ObjType in Types)
            {
                string TSSyntax = Helper.ConvertToTypeScriptSyntax(ObjType, AssemblyName.Value,IgnoredTypeNames);
                FileContent.Append(TSSyntax);
            }
            FileContent.Append("}" + "\r\n");
            Helper.CreateTSFile(AssemblyName.Key, FileContent);
        }



        #endregion
    }
}
