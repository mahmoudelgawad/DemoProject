using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{

    //                Point3D[] A = new Point3D[6];
    //            for (int i = 0; i < A.Length; i++) {
    //                A[i] = new Point3D();
    //}
    //A[0].x = 0; A[0].y = 5; A[0].z = 4;
    //            A[1].x = 0; A[1].y = 0; A[1].z = -3;
    //            A[2].x = -2; A[2].y = 1; A[2].z = -6;
    //            A[3].x = 1; A[3].y = -2; A[3].z = 2;
    //            A[4].x = 1; A[4].y = 1; A[4].z = 1;
    //            A[5].x = 4; A[5].y = -4; A[5].z = 3;
    //            int result = solution(A);
    //Console.WriteLine(result);
    class minCentralSperes
    {
        public class Point3D
        {
            public int x;
            public int y;
            public int z;
        }
        public static int solution(Point3D[] A)
        {
            List<double> CentralSpheres = new List<double>();
            double MaxCS = 0;
            int MinPointsCount = 0;
            foreach (var p in A)
            {
                CentralSpheres.Add((Math.Pow(p.x, 2)) + (Math.Pow(p.y, 2)) + (Math.Pow(p.z, 2)));
            }
            if (CentralSpheres.Count > 0)
            {
                MaxCS = CentralSpheres.Max();
                MinPointsCount = CentralSpheres.FindAll(cs => cs != MaxCS).Count();
            }
            return MinPointsCount;


        }
    }
}
