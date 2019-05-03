using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using ElCoffe.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

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

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                IConfigurationRoot configuration = new ConfigurationBuilder()
                   .SetBasePath(Directory.GetCurrentDirectory())
                   .AddJsonFile("appsettings.json")
                   .Build();
                //var connectionString = configuration.GetConnectionString("DbCoreConnectionString");
                optionsBuilder.UseSqlServer("Server=.;Database=ElCoffe;Trusted_Connection=True;MultipleActiveResultSets=true");
            }
        }
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
