using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DemoProject.Entities.DataModel;

namespace DemoProject.BL
{
    public class RefreshTokenBL : BaseLogic
    {
        public List<RefreshToken> GetAll()
        {
            var RefreshTokensList = context.RefreshTokens.ToList();
            return RefreshTokensList;
        }

        public int RemoveRefreshToken(int ID) {
            var RefreshToken = context.RefreshTokens.FirstOrDefault(r => r.ID == ID);
            if (RefreshToken == null) {
                return 0;
            }

            context.RefreshTokens.Remove(RefreshToken);
            int AffectedRows = context.SaveChanges();
            return AffectedRows;
        }
    }
}
