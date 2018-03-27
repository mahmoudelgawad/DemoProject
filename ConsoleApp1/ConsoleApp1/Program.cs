using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{


    class Program
    {
        public static void RigthRotate(int[] A, int K)
        {
            if (A.Length == 0 || K <= 0)
            {
                return;
            }
            int len = A.Length - 1;
            while (K > 0)
            {
                int lastValue = A[len];
                for (int i = len; i > 0; i--)
                {
                    A[i] = A[i - 1];
                }
                A[0] = lastValue;
                --K;
            }
        }
        static void Main(string[] args)
        {
            int[] A = new int[] { 1, 2, 3, 4, 5, 6, 7 };
            RigthRotate(A, 4);
            Console.WriteLine(string.Join(",",A));
            Console.WriteLine("End");
        }








    }
}
