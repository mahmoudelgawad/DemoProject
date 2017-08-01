using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class BinaryGap
    {
        public static int solution(int N)
        {
            bool Start = false;
            bool End = false;
            string Binary = "";
            char[] A = new char[0];
            List<int> GapList = new List<int>();
            while (N > 0)
            {
                if ((N % 2) == 0)
                {
                    Binary += "0";
                }
                else
                {
                    Binary += "1";
                }
                N = N / 2;
            }
            A = Binary.Reverse().ToArray();
            int GapLength = 0;
            foreach (char elm in A)
            {

                if (elm == '1')
                {
                    if (!Start)
                    {
                        Start = true;
                    }
                    else if (!End) { End = true; }
                }
                else if (elm == '0')
                {
                    ++GapLength;
                }

                if (Start && End)
                {
                    GapList.Add(GapLength);
                    if (elm == '1')
                    {
                        Start = true;
                    }
                    else
                    {
                        Start = false;
                    }

                    End = false;
                    GapLength = 0;
                }
            }

            return (GapList.Count > 0) ? GapList.Max() : 0;
        }
    }
}
