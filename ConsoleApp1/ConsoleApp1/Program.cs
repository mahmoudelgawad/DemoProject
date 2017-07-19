using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class c1
    {
        public c1(string name)
        {
            n = +1;
            this.name = name;
        }
        static c1()
        {
            n = -1;
        }
        private static int n = 0;
        private string name;
        public static int Getn { get { return n; } set { n = value; } }
        public string GetName { get { return name; } }
    }
    class c2
    {
        private static int n = 0;
        public static int Getn { get { return n; } set { n = value; } }
    }

    class Program
    {
        static void Main(string[] args)
        {
            //int[] A = { 4, 3, 2, 5, 1, 1 };
            int[] A = { 1,3,-3 };
            Console.WriteLine(solution(A));
        }

        public static int solution(int[] A)
        {
            try
            {
                if (!(A.Length > 0))
            {
                return 0;
            }
            int N = A.Length-1;
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
                if (i == N) {
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
        //public static int solution(string E, string L)
        //{
        //    try
        //    {
        //        if (string.IsNullOrEmpty(E) || string.IsNullOrEmpty(L))
        //        {
        //            return 0;
        //        }


        //        DateTime StartTime = DateTime.ParseExact(E, "HH:mm", System.Globalization.CultureInfo.CurrentCulture);
        //        DateTime EndTime = DateTime.ParseExact(L, "HH:mm", System.Globalization.CultureInfo.CurrentCulture);


        //        double TotalHours = (EndTime - StartTime).TotalHours;
        //        if (TotalHours <= 0)
        //        {
        //            return 0;
        //        }
        //        if (!((TotalHours % 1) == 0))
        //        {
        //            TotalHours = (int)TotalHours + 1;
        //        }
        //        double TotalCost = 2 + (3 * (TotalHours - (TotalHours - 1))) + (4 * (TotalHours - 1));
        //        return (int)TotalCost;
        //    }
        //    catch
        //    {
        //        return 0;
        //    }

        //}
    }
}
