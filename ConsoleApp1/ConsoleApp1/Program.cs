using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class MyStaticCalss {
        public static string Name;
        private int BornYear;
        static MyStaticCalss()//must parameterless
        {
            Name = "default name";
            BornYear = 12;
        }
        public static void GetName() {
            Console.WriteLine(Name);
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            MyStaticCalss.GetName();
        }
    }
}
