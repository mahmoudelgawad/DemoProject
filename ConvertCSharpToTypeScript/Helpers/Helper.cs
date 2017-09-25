using System;
using System.Collections.Generic;
using System.Text;
using System.Reflection;
using System.IO;

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

        public static string ConvertToTypeScriptSyntax(Type ObjType)
        {
            string Syntax = "";
            string DateTypeName = GetTSDataTypeName(ObjType);
            // just for test
           // Syntax += (ObjType.BaseType != null) ? ObjType.BaseType.Name + "----->\r\n" : "UNKNOWN----> \r\n";
            Syntax += "export " + DateTypeName + " " + FilterSpecialChar(ObjType.Name) + " {";
            Syntax += "\r\n";

            PropertyInfo[] PropertiesList = ObjType.GetProperties();
            foreach (var Member in PropertiesList)
            {

                Syntax += Member.Name + " : " + GetTSType(Member.PropertyType) + ";";
                Syntax += "\r\n";
            }
            MemberInfo[] MembersList = ObjType.GetMembers();
            if (ObjType.IsEnum)
            {
                int enumValue = 0;
                MemberInfo lastItem = MembersList[MembersList.Length - 1];
                foreach (var Member in MembersList)
                {
                    if (!(Member.MemberType is MemberTypes.Field) || Member.Name.ToLower() == "value__")
                    {
                        continue;
                    }
                    Syntax += Member.Name + " : " + enumValue.ToString();
                    if (!Member.Equals(lastItem))
                    {
                        Syntax += ",";
                    }
                    Syntax += "\r\n";
                    ++enumValue;
                }
            }
            else
            {
                foreach (var Member in MembersList)
                {
                    if (!(Member.MemberType is MemberTypes.Field))
                    {
                        continue;
                    }
                    Syntax += Member.Name + " : " + GetTSType(((FieldInfo)Member).FieldType) + ";";
                    Syntax += "\r\n";
                }
            }

            Syntax += "}";
            Syntax += "\r\n\r\n";
            return Syntax;
        }
        public static void CreateTSFile(string AssemblyName, StringBuilder FileContent)
        {
            string Path = Directory.GetCurrentDirectory();
            StreamWriter file = new StreamWriter(@"" + Path + "\\" + AssemblyName + ".ts");
            file.WriteLine(FileContent.ToString());
            file.Close();
        }

        public static string GetTSType(Type ObjType)
        {
            switch (ObjType.Name.ToLower())
            {
                case "string":
                    return "string";
                case "datetime":
                    return "Date";
                case "nullable`1":
                    return "string";
                case "id`1":
                    return "string";
                case "int16":
                    return "number";
                case "int32":
                    return "number";
                case "int64":
                    return "number";
                case "float":
                    return "number";
                case "double":
                    return "number";
                case "imarray`1":
                    return GetArrayTypeFromFullName(ObjType.FullName) + "[]";
                default:
                    return ObjType.Name;

            }
        }

        public static string FilterSpecialChar(string Name)
        {
            return Name.Replace("'", "").Replace("`", "");
        }
        public static string GetArrayTypeFromFullName(string FullName)
        {
            int indxblock = FullName.IndexOf("[");
            int indxcomma = FullName.IndexOf(",");
            string FirstPart = FullName.Substring(indxblock, indxcomma - indxblock);
            int indxpoint = FirstPart.LastIndexOf(".") + 1;
            string ArrayName = FirstPart.Substring(indxpoint, FirstPart.Length - indxpoint);
            return FilterSpecialChar(ArrayName);
        }
        public static string GetTSDataTypeName(Type ObjType)
        {

            if (ObjType.IsEnum)
            {
                return "enum";
            }
            else if (ObjType.IsSealed) //mean struct too
            {
                return "interface";
            }
            else if (ObjType.IsClass)
            {
                return "interface";
            }
            else if (ObjType.IsInterface)
            {
                return "interface";
            }
            return "UNKNOWNTYPE";
        }
        #endregion
    }
}
