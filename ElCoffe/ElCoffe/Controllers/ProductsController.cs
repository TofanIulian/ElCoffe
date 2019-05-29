using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ElCoffe.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ElCoffe.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private DbConn db = new DbConn();

        // GET: api/Todo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetAll()
        {
            //List<Product> list = new List<Product>();
            //Product p = new Product();
            //p.Name = "gigel";
            //p.Description = "gigel";
            //p.Id = 1;
            //p.Price = 10;
            //list.Add(p);
            return await db.Products.ToListAsync();
            //return list;
        }

        // GET: api/Todo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(long id)
        {
            var product = await db.Products.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        [HttpPost]
        public async Task<ActionResult<Product>> Create([FromBody]Product product)
        {
            db.Products.Add(product);
            await db.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
        }

        // PUT: api/Todo/
        [HttpPut]
        public async Task<IActionResult> UpdateProduct([FromBody]Product product)
        {
            db.Entry(product).State = EntityState.Modified;
            await db.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/Todo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(long id)
        {
            var product = await db.Products.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            db.Products.Remove(product);
            await db.SaveChangesAsync();

            return NoContent();
        }
    }
}