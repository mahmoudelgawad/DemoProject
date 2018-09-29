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
            TestDerived objTestDerived = new TestDerived();
            Console.WriteLine(objTestDerived.GetName());
            Console.ReadKey();
        }








    }
}
