using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DemoProject.Entities.DataModel;

namespace DemoProject.BL
{
    public class BaseLogic : IDisposable
    {
        public testEntities context;
        public BaseLogic()
        {
            context = new testEntities();
        }
        public virtual void Dispose()
        {
            context.Dispose();
        }
    }
}
