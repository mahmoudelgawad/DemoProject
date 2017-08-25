using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
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
        public static int TapeEquilibrium(int[] A)
        {
            List<int> Results = new List<int>();
            for (int p = 1; p <= A.Length - 1; p++)
            {
                int first = 0, second = 0;
                for (int i = 0; i < A.Length; i++)
                {

                    if (i < p)
                    {
                        first += A[i];
                    }
                    else
                    {
                        second += A[i];
                    }
                }
                int diff = first - second;
                Results.Add((diff < 0) ? diff * -1 : diff);
            }
            if (Results.Count == 0)
            {
                return 0;
            }
            return Results.Min();

            // write your code in C# 6.0 with .NET 4.5 (Mono)
        }
    }


}
