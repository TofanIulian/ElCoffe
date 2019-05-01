using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElCoffe.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public float Price { get; set; }
        public float Weight { get; set; }
        public virtual Category Category { get; set; }
    }
}
