using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElCoffe.Models
{
    public class Order
    {
        public int Id { get; set; }
        public string Address { get; set; }
        public string Details { get; set; }
        public virtual User User { get; set; }
        public virtual List<Product> Products { get; set; }
        public virtual Status Status { get; set; }
    }
}
