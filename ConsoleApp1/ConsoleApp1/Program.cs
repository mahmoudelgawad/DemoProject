using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{

    class Program
    {

        static void Main(string[] args)
        {
            Console.WriteLine(solution(new int[] { 1, 2, 1, 2, 3, 2 }));

        }

        public static int solution(int[] A)
        {
            bool found = false;
            int value = 0;
            for (int i = 0; i < A.Length; i++)
            {
                for (int ii = 0; ii < A.Length; ii++)
                {
                    if (A[ii] == A[i])
                    {
                        if (ii != i)
                        {
                            found = true;
                        }
                    }
                }
                
                if (!found)
                {
                    value = A[i];
                }
                found = false;

            }
            return value;
        }


    }
}
