using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DemoProject.API
{
    public class TestClass
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public short Age { get; set; }
        public string Address { get; set; }
        public DateTime CreatedDate { get; set; }
    }
    public class TestClassController : ApiController
    {
        private List<TestClass> _listTestClasses;
        public TestClassController()
        {
            _listTestClasses = new List<TestClass>();
            TestClass obj1 = new TestClass();
            obj1.ID = 100;
            obj1.Name = "mahmoud ahmed";
            obj1.Address = "Egypt, cairo , new nozha";
            obj1.Age = 35;
            obj1.CreatedDate = DateTime.Now;
            _listTestClasses.Add(obj1);
        }
        //GET as api/TestClasses
        public IEnumerable<TestClass> TestClasses()
        {
            
            return _listTestClasses;

        }

        // GET as api/gettestclass/1
          public TestClass GetTestClass(int ID)
        {
            var TestClassObj = _listTestClasses.SingleOrDefault(t => t.ID == ID);
            if (TestClassObj == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return TestClassObj;

        }
        [HttpPost]
        public TestClass CreateTestClass(TestClass TestclassObj)
        {
            if (!ModelState.IsValid)
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }

            _listTestClasses.Add(TestclassObj);
            //save changes
            return TestclassObj;
        }

        [HttpPut]
        public void UpdateTestClass(int ID, TestClass TestClassObj)
        {

            if (!ModelState.IsValid)
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }
            var TestClassInList = _listTestClasses.SingleOrDefault(t => t.ID == ID);
            if (TestClassInList == null)
            { throw new HttpResponseException(HttpStatusCode.NotFound); }
            //TestClassInList.Name = TestClassObj.Name;
            //TestClassInList.Age = TestClassObj.Age;
            int itemIndex = _listTestClasses.IndexOf(TestClassInList);
            if (itemIndex != -1)
            {
                _listTestClasses[itemIndex] = TestClassObj;
            }
            //save changes
        }
        [HttpDelete]
        public void DeleteTestClass(int ID)
        {
          
            var TestClassInList = _listTestClasses.SingleOrDefault(t => t.ID == ID);
            if (TestClassInList == null)
            { throw new HttpResponseException(HttpStatusCode.NotFound); }

            _listTestClasses.Remove(TestClassInList);
            //save changes
        }
    }
}
