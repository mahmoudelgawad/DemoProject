using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{


    class Program
    {
        public class Personinfo
        {
            public int Weight;
            public int Floor;
        }
        static void Main(string[] args)
        {
            int[] A = { 40, 100, 80, 20 };
            int[] B = { 3, 2, 2, 3 };
            int Result = solution(A, B, 5, 2, 200);
            Console.WriteLine(Result);
        }
        public static int solution(int[] A, int[] B, int M, int X, int Y)
        {
            int StopCount = 0;
            int Queue = A.Length;
            Dictionary<int, Personinfo> Peoplelist = new Dictionary<int, Personinfo>();
            while (Queue > 0)
            {
                Peoplelist = GetPeoplelist(A, B, X, Y, A.Length - Queue);
                StopCount += RunElevator(Peoplelist, ref Queue, M);

            }
            return StopCount;
        }
        public static Dictionary<int, Personinfo> GetPeoplelist(int[] A, int[] B, int X, int Y, int Startindex)
        {
            Dictionary<int, Personinfo> Peoplelist = new Dictionary<int, Personinfo>();
            for (int i = Startindex; i <= A.Length - 1; i++)
            {

                if (Peoplelist.Sum(p => p.Value.Weight) < Y)
                {
                    Peoplelist.Add(i, new Personinfo { Weight = A[i], Floor = B[i] });
                }
                else
                {
                    Peoplelist.Remove(i - 1);
                }

                if (Peoplelist.Count > X)
                {

                    Peoplelist.Remove(i);
                }
            }
            return Peoplelist;
        }

        public static int RunElevator(Dictionary<int, Personinfo> Peoplelist, ref int Queue, int M)
        {
            int StopCount = 0;
            string FloorsDone = "";
            Queue -= Peoplelist.Count;
            foreach (var Person in Peoplelist)
            {
                if (!FloorsDone.Contains("[" + Person.Value.Floor.ToString() + "]"))
                {
                    if (Person.Value.Floor <= M)
                    {
                        ++StopCount;
                        FloorsDone += "[" + Person.Value.Floor + "]";
                    }
                }
            }
            ++StopCount; // last stop
            return StopCount;
        }
    }
}
