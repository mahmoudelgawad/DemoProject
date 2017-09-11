using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DemoProject.Entities.DataModel;

namespace DemoProject.BLL
{
    public class BaseBL
    {
        public testEntities context;
        public BaseBL() {
            context = new testEntities();
        }
    }
}
