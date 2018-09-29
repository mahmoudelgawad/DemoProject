using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    public class TestClass
    {
        public TestClass()
        {
            name = "TestClass class";
        }
        protected string name;
        private int salary;

        public string Address { get; set; } = String.Empty;
        public Guid ID { get; } = Guid.NewGuid();
        public string GetName()
        {
            return "base class";
        }
    }
    public class TestDerived : TestClass
    {
        public TestDerived()
        {

        }
        public string GetName() //you can add public new keyword
        {
            //return base.name + " TestDerived class";
            return base.GetName() + " TestDerived class";
        }
    }
}
