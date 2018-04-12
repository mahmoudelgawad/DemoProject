using DemoProject.Entities.DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DemoProject.API
{
    //public class User
    //{
    //    public int ID { get; set; }
    //    public string Name { get; set; }
    //    public short Age { get; set; }
    //    public string Address { get; set; }
    //    public DateTime CreatedDate { get; set; }
    //}
    public class UsersController : ApiController
    {
        private testEntities _dbContext;

        public UsersController()
        {
            _dbContext = new testEntities();
            if (_dbContext.Users.Count() == 0)
            {
                User obj1 = new User();
                obj1.ID = 100;
                obj1.Name = "mahmoud ahmed";
                obj1.Address = "Egypt, cairo , new nozha";
                obj1.Age = 35;
                obj1.CreatedDate = DateTime.Now;
                _dbContext.Users.Add(obj1);
                _dbContext.SaveChanges();
            }

        }
        //GET as api/TestClasses
        [HttpGet]
        public IEnumerable<User> Users()
        {

            return _dbContext.Users.ToList();

        }

        // GET as api/gettestclass/1
        [HttpGet]
        public User GetUser(int ID)
        {
            var TestClassObj = _dbContext.Users.SingleOrDefault(t => t.ID == ID);
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
            TestclassObj.CreatedDate = DateTime.Now;
            _dbContext.Users.Add(TestclassObj);
            _dbContext.SaveChanges();
            return TestclassObj;
        }

        [HttpPut]
        public void UpdateUser(int ID, User TestClassObj)
        {

            if (!ModelState.IsValid)
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }
            var TestClassInDB = _dbContext.Users.SingleOrDefault(t => t.ID == ID);
            if (TestClassInDB == null)
            { throw new HttpResponseException(HttpStatusCode.NotFound); }
            TestClassInDB.Name = TestClassObj.Name;
            TestClassInDB.Age = TestClassObj.Age;
            TestClassInDB.Address = TestClassObj.Address;
            _dbContext.SaveChanges();

            //save changes
        }
        [HttpDelete]
        public int DeleteUser(int ID)
        {

            var TestClassInDB = _dbContext.Users.SingleOrDefault(t => t.ID == ID);
            if (TestClassInDB == null)
            { throw new HttpResponseException(HttpStatusCode.NotFound); }

            _dbContext.Users.Remove(TestClassInDB);

            _dbContext.SaveChanges();
            //save changes
            return 1;
        }
    }
}
