using System;
using System.Collections.Generic;
using System.Linq;

namespace Trial
{
    class basea
    {
        protected string Coco { get; set; } = "Coco WAWA";
    }
    class a : basea
    {
        public string name { get; set; }
        public string CocoBaseName { get { return Coco; } }
        static void fun() { }
    }
    class Program
    {
        static void Main(String[] args)
        {
            Dictionary<string, string> d = new Dictionary<string, string> {
                ["sdsd"]="",
                ["asas"]=""
            };
            a obj = new a();
            Console.WriteLine(obj.CocoBaseName);
           

        }
    }
}