using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DemoProject.Entities.DataModel;

namespace DemoProject.BL
{
    public class PostLogic : BaseLogic
    {
        //to be PostDto instead PostEntity
        public PostLogic(PostEntity PostObj)
        {
            _post = PostObj;
        }

        #region Properties
        private PostEntity _post;
        public PostEntity PostEntity
        {
            get
            {
                if (_post is null)
                {
                    return new PostEntity();
                }
                else
                {
                    return _post;
                }
            }
        }
        public testEntities DBContext
        {
            get { return context; }
        }
        #endregion

        public void SaveChanges()
        {
            if (PostEntity.Id == 0) {
                return;
            }
            context.PostEntities.Add(PostEntity);
            context.SaveChanges();
        }

    }
}
