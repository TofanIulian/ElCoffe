using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ElCoffe.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "elCategories",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_elCategories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "elStatuses",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_elStatuses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "elUsers",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Username = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    IsAdmin = table.Column<bool>(nullable: false),
                    IsEmployee = table.Column<bool>(nullable: false),
                    IsCourier = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_elUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "elProducts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Price = table.Column<float>(nullable: false),
                    Weight = table.Column<float>(nullable: false),
                    CategoryId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_elProducts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_elProducts_elCategories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "elCategories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "elOrders",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Address = table.Column<string>(nullable: true),
                    Details = table.Column<string>(nullable: true),
                    UserId = table.Column<int>(nullable: false),
                    StatusId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_elOrders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_elOrders_elStatuses_StatusId",
                        column: x => x.StatusId,
                        principalTable: "elStatuses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_elOrders_elUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "elUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "elReservations",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    PeopleNumber = table.Column<int>(nullable: false),
                    Date = table.Column<DateTime>(nullable: false),
                    Details = table.Column<string>(nullable: true),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_elReservations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_elReservations_elUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "elUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "elOrder_Product_Links",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Quantity = table.Column<int>(nullable: false),
                    OrderId = table.Column<int>(nullable: false),
                    ProductId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_elOrder_Product_Links", x => x.Id);
                    table.ForeignKey(
                        name: "FK_elOrder_Product_Links_elOrders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "elOrders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_elOrder_Product_Links_elProducts_ProductId",
                        column: x => x.ProductId,
                        principalTable: "elProducts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_elOrder_Product_Links_OrderId",
                table: "elOrder_Product_Links",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_elOrder_Product_Links_ProductId",
                table: "elOrder_Product_Links",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_elOrders_StatusId",
                table: "elOrders",
                column: "StatusId");

            migrationBuilder.CreateIndex(
                name: "IX_elOrders_UserId",
                table: "elOrders",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_elProducts_CategoryId",
                table: "elProducts",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_elReservations_UserId",
                table: "elReservations",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "elOrder_Product_Links");

            migrationBuilder.DropTable(
                name: "elReservations");

            migrationBuilder.DropTable(
                name: "elOrders");

            migrationBuilder.DropTable(
                name: "elProducts");

            migrationBuilder.DropTable(
                name: "elStatuses");

            migrationBuilder.DropTable(
                name: "elUsers");

            migrationBuilder.DropTable(
                name: "elCategories");
        }
    }
}
