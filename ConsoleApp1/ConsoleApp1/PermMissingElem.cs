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

        // get winter length
        public static int GetMinWinterLength(int[] T)
        {
            int WinterLength = 0;
            List<int> WinterList = new List<int>();
            foreach (int Deg in T)
            {
                if (Deg < 6) //winter
                {
                    ++WinterLength;
                }
                else // summer
                {
                    if (WinterLength > 0)
                    {
                        WinterList.Add(WinterLength);
                        WinterLength = 0;
                    }

                }
            }
            if (WinterLength > 0)
            {
                WinterList.Add(WinterLength);
            }

            if (WinterList.Count > 0)
            {
                return WinterList.Min();
            }
            return 0;
        }

        public static String ConvertNamesToEmails(String S, String C)
        {
            List<string> NamesBefore = new List<string>();
            List<string> Emails = new List<string>();
            NamesBefore = S.Split(new string[] { "; " }, StringSplitOptions.None).ToList();
            foreach (string Name in NamesBefore)
            {
                string CurrentName = Name;
                CurrentName = CurrentName.Replace("-", "");
                string[] AName = CurrentName.Split(' ');
                if (AName.Length > 0)
                {
                    CurrentName = AName[0] + "_" + AName[AName.Length - 1];
                }
                else
                {
                    CurrentName = CurrentName.Replace(" ", "_");
                }
                int CountNo = Emails.FindAll(e => e == CurrentName.ToLower() + "@" + C.ToLower() + ".com").Count;
                CurrentName = CurrentName.ToLower() + ((CountNo > 0) ? (CountNo + 1).ToString() : "") + "@" + C.ToLower() + ".com";
                Emails.Add(CurrentName);
            }
            if (Emails.Count > 0)
            {
                return String.Join("; ", Emails);
            }
            return "";
        }
    }


}
