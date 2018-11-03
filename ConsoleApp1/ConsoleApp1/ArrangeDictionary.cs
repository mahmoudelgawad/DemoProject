using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class ArrangeDictionary
    {
        public static int[] rearrange(int[] elements)
        {
            var values = new Dictionary<int, int>();
            foreach (int i in elements)
            {
                if (values.ContainsKey(i))
                {
                    continue;
                }
                string binaryValue = Convert.ToString(i, 2);

                values.Add(i, binaryValue.Count(c => c == '1'));
            }
            Dictionary<int, int> firstArrange = values.OrderBy(kp => kp.Key).ToDictionary(kp => kp.Key, kp => kp.Value);
            return firstArrange.OrderBy(kp => kp.Value).Select(kp => kp.Key).ToArray();
        }


        //static void Main(String[] args)
        //{
        //    int[] res;

        //    int _elements_size = 0;
        //    _elements_size = Convert.ToInt32(Console.ReadLine());
        //    int[] _elements = new int[_elements_size];
        //    int _elements_item;
        //    for (int _elements_i = 0; _elements_i < _elements_size; _elements_i++)
        //    {
        //        _elements_item = Convert.ToInt32(Console.ReadLine());
        //        _elements[_elements_i] = _elements_item;
        //    }

        //    res = rearrange(_elements);
        //    for (int res_i = 0; res_i < res.Length; res_i++)
        //    {
        //        Console.WriteLine(res[res_i]);
        //    }

        //}

    }
}
