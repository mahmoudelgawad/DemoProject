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
            TestClass obj= new TestClass();
            obj.Address = "new nozha";
            Console.WriteLine(obj.Address + "-->" + obj.ID);
        }

      






    }
}
