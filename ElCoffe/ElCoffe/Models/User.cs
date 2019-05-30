using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElCoffe.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public bool IsAdmin { get; set; } = false;
        public bool IsEmployee { get; set; } = false;
        public bool IsCourier { get; set; } = false;
    }
}
