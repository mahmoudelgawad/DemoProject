using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class CyclicRotation
    {
        public static int[] solution(int[] A, int K)
        {
            while (K > 0)
            {
                int[] AA = new int[A.Length];
                for (int i = 0; i < A.Length; i++)
                {
                    if (i == 0)
                    {
                        AA[i] = A[A.Length - 1];
                    }
                    else
                    {
                        AA[i] = A[i - 1];
                    }

                }
                A = AA;
                --K;
            }
            return A;
        }
    }
}
