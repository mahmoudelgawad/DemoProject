using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class PermMissingElem
    {
        public static int solution(int[] A)
        {
            int Total = A.Sum();
            int IdealTotal = Enumerable.Range(1, A.Length + 1).Sum();
            return IdealTotal - Total;
        }
    }
}
