﻿// <auto-generated />
using System;
using ElCoffe;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace ElCoffe.Migrations
{
    [DbContext(typeof(DbConn))]
    [Migration("20190529194749_init")]
    partial class init
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.11-servicing-32099")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ElCoffe.Models.Category", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("elCategories");
                });

            modelBuilder.Entity("ElCoffe.Models.Order", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address");

                    b.Property<string>("Details");

                    b.Property<int>("StatusID");

                    b.Property<int>("UserID");

                    b.HasKey("Id");

                    b.HasIndex("StatusID");

                    b.HasIndex("UserID");

                    b.ToTable("elOrders");
                });

            modelBuilder.Entity("ElCoffe.Models.Order_Product_Link", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("OrderID");

                    b.Property<int>("ProductID");

                    b.Property<int>("Quantity");

                    b.HasKey("Id");

                    b.HasIndex("OrderID");

                    b.HasIndex("ProductID");

                    b.ToTable("elOrder_Product_Links");
                });

            modelBuilder.Entity("ElCoffe.Models.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CategoryID");

                    b.Property<string>("Description");

                    b.Property<string>("Name");

                    b.Property<float>("Price");

                    b.Property<float>("Weight");

                    b.HasKey("Id");

                    b.HasIndex("CategoryID");

                    b.ToTable("elProducts");
                });

            modelBuilder.Entity("ElCoffe.Models.Reservation", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Date");

                    b.Property<string>("Details");

                    b.Property<int>("PeopleNumber");

                    b.Property<int>("UserID");

                    b.HasKey("Id");

                    b.HasIndex("UserID");

                    b.ToTable("elReservations");
                });

            modelBuilder.Entity("ElCoffe.Models.Status", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("elStatuses");
                });

            modelBuilder.Entity("ElCoffe.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address");

                    b.Property<bool>("Admin");

                    b.Property<string>("Email");

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<string>("Password");

                    b.Property<string>("PhoneNumber");

                    b.Property<string>("Username");

                    b.HasKey("Id");

                    b.ToTable("elUsers");
                });

            modelBuilder.Entity("ElCoffe.Models.Order", b =>
                {
                    b.HasOne("ElCoffe.Models.Status", "Status")
                        .WithMany()
                        .HasForeignKey("StatusID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("ElCoffe.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("ElCoffe.Models.Order_Product_Link", b =>
                {
                    b.HasOne("ElCoffe.Models.Order", "Order")
                        .WithMany()
                        .HasForeignKey("OrderID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("ElCoffe.Models.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("ElCoffe.Models.Product", b =>
                {
                    b.HasOne("ElCoffe.Models.Category", "Category")
                        .WithMany()
                        .HasForeignKey("CategoryID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("ElCoffe.Models.Reservation", b =>
                {
                    b.HasOne("ElCoffe.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserID")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
