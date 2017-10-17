using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoProject.Entities.CustomeDataModel
{
    //not implemented by the typewriter
    public struct ExchangeRateCustomHistoryRate
    {
        public readonly DateTime ValidFrom;
        public readonly decimal ExchangeRate;
        public readonly decimal ChangeFromPrevious;
    }
    public enum ClubType {FirstClass=1,SecondClass=2 }
    public interface IUserOptions
    {
         DateTime BirthDate { get; set; }
         string Address { get; set; }
    }
    public class UserBase
    {
       public DateTime BirthDate { get; set; }
       public string Address { get; set; }
    }
    //
    public class User: UserBase
    {
        public string Name { get; set; }
        public short Age { get; set; }
    }
}
