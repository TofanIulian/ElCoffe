using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ElCoffe.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;

namespace ElCoffe.Controllers
{
	[Route("api/[controller]")]
    public class Order_Product_LinkController : Controller
    {
        private DbConn db = new DbConn();

        // GET: api/Todo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order_Product_Link>>> GetAll()
        {
            return await db.elOrder_Product_Links.ToListAsync();
        }

        // GET: api/Todo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Order_Product_Link>> GetOrder_Product_Link(long id)
        {
            var opl = await db.elOrder_Product_Links.FindAsync(id);

            if (opl == null)
            {
                return NotFound();
            }

            return opl;
        }

        [HttpPost]
        public async Task<ActionResult<Order_Product_Link>> Create([FromBody]Order_Product_Link opl)
        {
            db.elOrder_Product_Links.Add(opl);
            await db.SaveChangesAsync();

            return CreatedAtAction(nameof(GetOrder_Product_Link), new { id = opl.Id }, opl);
        }

        // PUT: api/Todo/5
        [HttpPut]
        public async Task<IActionResult> UpdateOrder(Order_Product_Link opl)
        {
            db.Entry(opl).State = EntityState.Modified;
            await db.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/Todo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrder_Product_Link(long id)
        {
            var opl = await db.elOrder_Product_Links.FindAsync(id);

            if (opl == null)
            {
                return NotFound();
            }

            db.elOrder_Product_Links.Remove(opl);
            await db.SaveChangesAsync();

            return NoContent();
        }
    }
}