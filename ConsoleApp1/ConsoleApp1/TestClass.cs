using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class TestClass
    {
        protected string name;
        private int salary;

        public string Address { get; set; } = String.Empty;
        public Guid ID { get; } = Guid.NewGuid();
    }
    class TestDerived:TestClass {
        public TestDerived() {

        }
        public string GetName() {
            return base.name;
        }
    }
}
