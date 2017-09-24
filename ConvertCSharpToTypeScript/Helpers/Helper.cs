using System;
using System.Collections.Generic;
using System.Text;
using System.Reflection;

namespace ConvertCSharbToTypeScript.Helpers
{
    class Helper
    {
        public Helper()
        {

        }

        #region Function

        // ReflectDLLName function  take AssemblyName as string and return the content as list of Types
        public static Type[] ReflectDLLName(string AssemblyName)
        {
            Assembly ObjAssembly = Assembly.Load(AssemblyName);
            return ObjAssembly.GetExportedTypes();
        }

        public static void ExportToTypeScriptFile(Type ObjType)
        {
            MemberInfo[] MembersList = ObjType.GetMembers();
            foreach (var Member in MembersList)
            {
                Console.WriteLine(Member.Name);
            }
        }
        #endregion
    }
}
