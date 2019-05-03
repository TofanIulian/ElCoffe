using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ElCoffe.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace ElCoffe
{
    public class DbConn : DbContext
    {
        public DbConn()
        {

        }
        public DbConn(DbContextOptions<DbConn> options) : base(options)
        {

        }


        public DbSet<User> Users { get; set; }
        public DbSet<Status> Statuses { get; set; }
        public DbSet<Reservation> Reservations { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Category> Categories { get; set; }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    base.OnConfiguring(optionsBuilder);
        //}
    }

    public class ToDoContextFactory : IDesignTimeDbContextFactory<DbConn>
    {
        public DbConn CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<DbConn>();
            builder.UseSqlServer("Server=.;Database=ElCoffe;Trusted_Connection=True;MultipleActiveResultSets=true");
            return new DbConn(builder.Options);
        }
    }
}
