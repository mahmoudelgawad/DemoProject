using System;
using System.Collections.Generic;
using System.Text;
using System.Reflection;
using System.IO;
using System.Linq;
using System.Configuration;
using System.Collections.Specialized;

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
        public static bool isNotValidTSType(Type ObjType, List<string> NamespacesList, Dictionary<string, List<string>> IgnoredTypeNames)
        {
            if (!(NamespacesList is null) && NamespacesList.Any() && !NamespacesList.Contains(ObjType.Namespace))
            {
                return true;
            }
            if (!(IgnoredTypeNames is null))
            {
                foreach (var KeyValue in IgnoredTypeNames)
                {

                    if (KeyValue.Key == ObjType.Assembly.GetName().Name)
                    {
                        if (KeyValue.Value.Contains(ObjType.Name))
                        {
                            return true;
                        }
                    }
                }


            }
            if (!(ObjType.BaseType is null) && ObjType.BaseType.Name == "DbContext")
            {
                return true;
            }
            if (ObjType.Name.ToLower().Contains("itypeserializ"))
            {
                return true;
            }
            if (ObjType.Name.ToLower().Contains("controller"))
            {
                return true;
            }
            if (ObjType.Name.ToLower().Contains("encoder"))
            {
                return true;
            }
            if (ObjType.IsAbstract)
            {
                //return true;
            }

            return false;
        }
        public static string ConvertToTypeScriptSyntax(Type ObjType, List<string> NamespacesList = null, Dictionary<string, List<string>> IgnoredTypeNames = null)
        {
            if (isNotValidTSType(ObjType, NamespacesList, IgnoredTypeNames))
            {
                return "";
            }
            string Syntax = "";
            string DataTypeName = GetTSDataTypeName(ObjType);
            // just for test
            // Syntax += (ObjType.BaseType != null) ? ObjType.BaseType.Name + "----->\r\n" : "UNKNOWN----> \r\n";
            Syntax += "export " + DataTypeName + " " + FilterSpecialChar(ObjType.Name) + "" +
                isGenericType(ObjType) +
                " {";
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
                    Syntax += Member.Name + " = " + enumValue.ToString();
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
                    Syntax += Member.Name + " : " + GetTSType(((FieldInfo)Member).FieldType, null, ObjType.Assembly.GetName().Name) + ";";
                    Syntax += "\r\n";
                }
            }

            Syntax += "}";
            Syntax += "\r\n\r\n";
            return Syntax;
        }
        public static void CreateTSFile(string AssemblyName, StringBuilder FileContent)
        {

            string Path = "";

            // path of specific folder , from App config file
            //Path = ConfigurationManager.AppSettings["ExportPath"];
            ExeConfigurationFileMap map = new ExeConfigurationFileMap { ExeConfigFilename = "App.config" };
            Configuration config = ConfigurationManager.OpenMappedExeConfiguration(map, ConfigurationUserLevel.None);
            Path = config.AppSettings.Settings["ExportPath"].Value;

            if (string.IsNullOrEmpty(Path))
            {
                // path of the current folder of runing console exe file
                Path =  Directory.GetCurrentDirectory();
            }
            StreamWriter file = new StreamWriter(@"" + Path + "\\" + AssemblyName + ".ts");
            file.WriteLine(FileContent.ToString());
            file.Close();
        }

        public static string GetTSTypeName(string TypeName)
        {
            switch (TypeName.ToLower())
            {
                case "string":
                    return "string";
                case "datetime":
                    return "Date";
                case "timespan":
                    return "Date";
                case "id`1":
                    return "string";
                case "id`1[]":
                    return "string[]";
                case "int16":
                    return "number";
                case "uint16":
                    return "number";
                case "int32":
                    return "number";
                case "uint32":
                    return "number";
                case "int64":
                    return "number";
                case "uint64":
                    return "number";
                case "float":
                    return "number";
                case "double":
                    return "number";
                case "decimal":
                    return "number";
                case "byte":
                    return "number";
                case "byte[]":
                    return "number[]";
                case "list<any>[]":
                    return "any[]";
                case "string[]":
                    return "string[]";
                case "boolean":
                    return "boolean";
                case "workbookparseinfo":
                    return "any";
                case "ipv4address":
                    return "string";
                case "ipv6address":
                    return "string";
                case "t":
                    return "any";

            }
            return TypeName;
        }
        public static string GetTSType(Type ObjType, string TypeName = null, string ContainerAssemplyName = null)
        {

            if (string.IsNullOrEmpty(TypeName))
            {
                TypeName = ObjType.Name;
            }
            TypeName = GetTSTypeName(TypeName);

            if (TypeName.ToLower() == "nullable`1" && ObjType.IsGenericType && ObjType.GenericTypeArguments.Length > 0)
            {
                TypeName = GetTSTypeName(ObjType.GenericTypeArguments[0].Name);
            }

            if (TypeName.ToLower() == "imarray`1")
            {
                TypeName = (ObjType is null) ? TypeName + "[]" : GetArrayTypeFromFullName(ObjType.FullName, ContainerAssemplyName, ObjType) + "[]";
            }


            if (TypeName.Contains("`1"))
            {
                TypeName = GetTSTypeName(FilterSpecialChar(TypeName)) + isGenericTypeMember(ObjType) + "[]";
                TypeName = GetTSTypeName(TypeName);
            }

            if (TypeName.Contains("`2"))
            {
                TypeName = "any[]";
            }

            return TypeName;

        }

        public static string FilterSpecialChar(string Name)
        {
            return Name.Replace("'", "").Replace("`1", "").Replace("`2", "").Replace("[", "").Replace("]", "");
        }
        public static string isGenericType(Type ObjType)
        {
            string GenericName = "";
            if (ObjType.IsGenericType && ObjType.IsGenericTypeDefinition && ObjType.ContainsGenericParameters)
            {
                GenericName = ((TypeInfo)ObjType).GenericTypeParameters[0].Name;
                GenericName = FilterSpecialChar(GenericName);
                if (GenericName.ToLower() == "t")
                {
                    return "";
                }
                else
                {
                    return "<" + GenericName + ">";
                }

            }
            return GenericName;
        }

        public static string isGenericTypeMember(Type ObjType)
        {
            string GenericName = "";
            if (ObjType.IsGenericType && ObjType.GenericTypeArguments.Length > 0)
            {
                //GenericName = ObjType.GenericTypeArguments[0].Name;
                //GenericName = FilterSpecialChar(GenericName);
                //return "<" + GenericName + ">";
                return "<any>";
            }
            return GenericName;
        }
        public static string GetArrayTypeFromFullName(string FullName, string ContainerAssemplyName, Type ObjType = null)
        {
            string ArrayName = "";

            if (string.IsNullOrEmpty(FullName))
            {
                return "any";
            }
            int indxblock = FullName.IndexOf("[");
            int indxcomma = FullName.IndexOf(",");
            string FirstPart = FullName.Substring(indxblock, indxcomma - indxblock);

            if (FirstPart.Contains(ContainerAssemplyName))
            {
                int AssemplyNameIndex = FirstPart.IndexOf(ContainerAssemplyName);
                FirstPart = FirstPart.Substring(AssemplyNameIndex, (FirstPart.Length - AssemplyNameIndex));
                ArrayName = FirstPart.Replace(ContainerAssemplyName + ".", "");
                if (ArrayName.Contains("`1"))
                {
                    int to = ArrayName.IndexOf("`1");
                    ArrayName = ArrayName.Substring(0, ArrayName.Length - to);
                }
                else if (ArrayName.Contains("."))
                {
                    int indxpoint = FirstPart.LastIndexOf(".") + 1;
                    ArrayName = FirstPart.Substring(indxpoint, FirstPart.Length - indxpoint);
                }
            }
            else
            {
                int indxpoint = FirstPart.LastIndexOf(".") + 1;
                ArrayName = FirstPart.Substring(indxpoint, FirstPart.Length - indxpoint);
            }
            if (ArrayName.Contains("+") && ObjType.GenericTypeArguments.Length > 0)
            {
                ArrayName = ObjType.GenericTypeArguments[0].Name;
            }

            return GetTSType(null, FilterSpecialChar(ArrayName));

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
