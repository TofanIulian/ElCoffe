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
        [ForeignKey("UserId")]
        public int UserId { get; set; }
        public virtual User User { get; set; }
        [ForeignKey("StatusId")]
        public int StatusId { get; set; }
        public virtual Status Status { get; set; }
    }
}
