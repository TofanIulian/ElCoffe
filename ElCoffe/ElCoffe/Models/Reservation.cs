﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ElCoffe.Models
{
    public class Reservation
    {
        public int Id { get; set; }
        public int PeopleNumber { get; set; }
        public DateTime Date { get; set; }
        public string Details { get; set; }
        [ForeignKey("UserId")]
        public int UserId { get; set; }
        public virtual User User { get; set; }
    }
}
