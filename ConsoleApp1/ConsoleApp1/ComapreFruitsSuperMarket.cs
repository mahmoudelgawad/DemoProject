using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class ComapreFruitsSuperMarket
    {
        public static int checkWinner(List<List<string>> codeList, List<string> shoppingCart)
        {
            if (codeList.Count == 0 || shoppingCart.Count == 0)
            {
                return 0;
            }
            List<string> diffItems = new List<string>();
            foreach (string item in shoppingCart)
            {
                var FoundItemList = codeList.Where(L => L.Contains(item)).ToList();
                if (FoundItemList.Count == 0)
                {
                    diffItems.Add(item);
                }
            }


            string codeListStr = "";
            foreach (var list in codeList)
            {
                codeListStr += String.Join(",", list.ToArray());
                codeListStr += ",";
            }
            codeListStr = codeListStr.Remove(codeListStr.LastIndexOf(","));
            string shoppingCartStr = String.Join(",", shoppingCart.ToArray());

            foreach (var item in diffItems)
            {
                shoppingCartStr = shoppingCartStr.Replace(item, "anything");
            }

            bool Result = shoppingCartStr.Contains(codeListStr);
            if (Result)
            {
                return 1;
            }
            else
            {
                return 0;
            }


        }
        public int cornerlevelField(int numRows, int numColumns, int[,] field)
        {
            int distance = 0;
            for (int i = 0; i <= numColumns; i++)
            {
                for (int ii = 0; ii < numRows; ii++)
                {
                    if (field[i, ii] == 1)
                    {
                        ++distance;
                    }
                }
            }
            if (distance <= 1)
            {
                return -1;
            }
            return distance;
        }
    }
}
