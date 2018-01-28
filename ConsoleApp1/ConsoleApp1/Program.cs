using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{


    class Program
    {

        static void Main(string[] args)
        {
            int month = 2;
            int year = 2001;
            DateTime date = new DateTime(year, month, 1);
            Console.WriteLine(date.ToString("yy") + "      " + date.ToString("MM"));
            Console.Read();
        }

      






    }
}
