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

            int[] A = { 1, 2, 3, 3, 1, 3, 1 };
            int[] B = { 5};
            int result= solution(3, A);
        }

        public static int solution1(string E, string L)
        {
            try
            {
                if (string.IsNullOrEmpty(E) || string.IsNullOrEmpty(L))
                {
                    return 0;
                }


                DateTime StartTime = DateTime.ParseExact(E, "HH:mm", System.Globalization.CultureInfo.CurrentCulture);
                DateTime EndTime = DateTime.ParseExact(L, "HH:mm", System.Globalization.CultureInfo.CurrentCulture);


                double TotalHours = (EndTime - StartTime).TotalHours;
                if (TotalHours <= 0)
                {
                    return 0;
                }
                if (!((TotalHours % 1) == 0))
                {
                    TotalHours = (int)TotalHours + 1;
                }
                double TotalCost = 2 + (3 * (TotalHours - (TotalHours - 1))) + (4 * (TotalHours - 1));
                return (int)TotalCost;
            }
            catch
            {
                return 0;
            }

        }
        public static int solution2(int[] A)
        {
            try
            {
                if (!(A.Length > 0))
                {
                    return 0;
                }
                int N = A.Length - 1;
                List<int> FirstPart = new List<int>();
                List<int> SecondPart = new List<int>();
                List<int> Results = new List<int>();
                for (int i = 0; i <= N; i++)
                {
                    for (int i2 = 0; i2 <= N; i2++)
                    {
                        if (i2 <= i)
                        {
                            FirstPart.Add(A[i2]);
                        }
                        if (i2 > i)
                        {
                            SecondPart.Add(A[i2]);
                        }

                    }
                    if (i == N)
                    {
                        break;
                    }
                    int FirstMax = (FirstPart.Count > 0) ? FirstPart.Max() : 0;
                    int SecondMax = (SecondPart.Count > 0) ? SecondPart.Max() : 0;
                    int diff = (FirstMax - SecondMax);
                    Results.Add((diff >= 0) ? diff : diff * -1);
                    FirstPart.Clear();
                    SecondPart.Clear();
                }
                return Results.Max();
            }
            catch
            {
                return 0;
            }

        }
        
        static void RecFun(int[] A, int Start, int Num)
        {
            if ( A.Length == 0) { Console.WriteLine("\r\nEMPTY"); return; }
            if (Num > A.Length - 1 ) { return; }
            if (Start > A.Length - 1)
            {
                Console.WriteLine("");
                RecFun(A, 0, Num + 1);
            }
                if (Start > A.Length - 1) { return; }
            if (Start != Num)
            {
                if (A[Num] > A[Start])
                {
                    Console.Write("True ");
                }
                else
                {
                    Console.Write("false ");
                }
            }

            RecFun(A, Start + 1, Num);
        }

        public static int solution(int M, int[] A)
        {
            int N = A.Length;
            int[] count = new int[M + 1];
            for (int i = 0; i < count.Length; i++)
                count[i] = 0;
            int maxOccurence = 1;
            int index = -1;
            for (int i = 0; i < N; i++)
            {
                if (count[(A[i] <= count.Length) ? 0 : i] > 0)
                {
                    int tmp = count[A[i]];
                    if (tmp > maxOccurence)
                    {
                        maxOccurence = tmp;
                        index = i;
                    }
                    count[A[i]] = tmp + 1;
                }
                else
                {
                    count[(A[i] <= count.Length) ? 0 : i] = 1;
                }
            }
            return (A.Length > 0) ? A[0] : 0;
        }
        public int solutiontest(int M, int[] A)
        {
            int N = A.Length;
            int[] count = new int[M + 1];
            for (int i = 0; i <= M; i++)
                count[i] = 0;
            int maxOccurence = 1;
            int index = -1;
            for (int i = 0; i < N; i++)
            {
                if (count[A[i]] > 0)
                {
                    int tmp = count[A[i]];
                    if (tmp > maxOccurence)
                    {
                        maxOccurence = tmp;
                        index = i;
                    }
                    count[A[i]] = tmp + 1;
                }
                else
                {
                    count[A[i]] = 1;
                }
            }
            return A[index];
        }
    }
}
