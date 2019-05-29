using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ElCoffe.Models
{
    public class Order_Product_Link
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
        [ForeignKey("OrderID")]
        public int OrderID { get; set; }
        public virtual Order Order { get; set; }
        [ForeignKey("ProductID")]
        public int ProductID { get; set; }
        public virtual Product Product { get; set; }
    }
}
