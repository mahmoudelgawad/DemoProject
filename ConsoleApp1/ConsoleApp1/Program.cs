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
            Console.WriteLine(solution("0 - 22 1985--324"));
        }

        public static string solution(string S)
        {
            string Result = "";

            string Input = S.Replace("-", "").Replace(" ", "");
            if (Input.ToList().Count < 2 || Input.ToList().Count > 100)
            {
                return "";
            }
            int i = 0;
            foreach (char ch in Input)
            {
                Result += ch;
                ++i;
                if (i == 3)
                {
                    Result += '-';
                    i = 0;
                }
            }
            if (Result[Result.Length - 1] == '-') {
                Result= Result.Remove(Result.Length - 1);
            }
            if (i == 1) {
                char[] A = Result.ToArray();
                int lastDashIndex = Result.LastIndexOf("-");
                char temp = Result[lastDashIndex - 1];
                A[lastDashIndex] = temp;
                A[lastDashIndex-1] = '-';
                Result = new string(A);
            }

            return Result;
        }

    }
}
