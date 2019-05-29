using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ElCoffe.Models
{
    public class Order
    {
        public int Id { get; set; }
        public string Address { get; set; }
        public string Details { get; set; }
        [ForeignKey("UserID")]
        public int UserID { get; set; }
        public virtual User User { get; set; }
        [ForeignKey("StatusID")]
        public int StatusID { get; set; }
        public virtual Status Status { get; set; }
    }
}
