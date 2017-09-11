using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DemoProject.Entities.DataModel;

namespace DemoProject.BLL
{
    public class PostBL : BaseBL
    {
        public PostBL(Post PostObj)
        {
            _post = PostObj;
        }

        #region Properties
        private Post _post;
        public Post PostEntity
        {
            get
            {
                if (_post is null)
                {
                    return new Post();
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
            context.Posts.Add(PostEntity);
            context.SaveChanges();
        }

    }
}
