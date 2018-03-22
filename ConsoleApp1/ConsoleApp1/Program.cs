using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{


    class Program
    {

        public static void rotate(int[] nums, int k) {
            if (k > nums.Length)
                k = k % nums.Length;
            int[] result = new int[nums.Length];

            for (int i = 0; i < k; i++) {
                result[i] = nums[nums.Length - k + i];
            }
            int j = 0;
            for (int i = k; i < nums.Length; i++) {
                result[i] = nums[j];
                j++;
            }
            Array.Copy(result, nums, nums.Length);
        }
        static void Main(string[] args)
        {
            int[] solution = new int[] { 5, 6, 7, 1, 2, 3, 4 };
                rotate(solution, 3);
            Console.WriteLine("");
           
        }








    }
}
