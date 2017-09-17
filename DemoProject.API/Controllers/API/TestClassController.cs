using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DemoProject.API
{
    public class User
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public short Age { get; set; }
        public string Address { get; set; }
        public DateTime CreatedDate { get; set; }
    }
    public class UsersController : ApiController
    {
        private List<User> _listTestClasses;
        
        public UsersController()
        {
            _listTestClasses = new List<User>();
            User obj1 = new User();
            obj1.ID = 100;
            obj1.Name = "mahmoud ahmed";
            obj1.Address = "Egypt, cairo , new nozha";
            obj1.Age = 35;
            obj1.CreatedDate = DateTime.Now;
            _listTestClasses.Add(obj1);
        }
        //GET as api/TestClasses
        [HttpGet]
        public IEnumerable<User> Users()
        {
            
            return _listTestClasses;

        }

        // GET as api/gettestclass/1
          public User GetUser(int ID)
        {
            var TestClassObj = _listTestClasses.SingleOrDefault(t => t.ID == ID);
            if (TestClassObj == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return TestClassObj;

        }
        [HttpPost]
        public User CreateUser(User TestclassObj)
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
        public void UpdateUser(int ID, User TestClassObj)
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
        public int DeleteUser(int ID)
        {
          
            var TestClassInList = _listTestClasses.SingleOrDefault(t => t.ID == ID);
            if (TestClassInList == null)
            { throw new HttpResponseException(HttpStatusCode.NotFound); }

            _listTestClasses.Remove(TestClassInList);
            //save changes
            return 1;
        }
    }
}
