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
    public class UsersController : Controller
    {
        private DbConn db = new DbConn();
        //GET: elUsers
       //[HttpGet("[action]")]
       // public int GetAll()
       // {
       //     var elUsers = db.elUsers;
       //     return 2;
       // }
        /*
         o functie login care returneaza un boolean care primeste un UserDTO :username,parola
         verific daca exista un user cu acel username si cu acea parola

             */
        [HttpPost("Login")]
        public User Login([FromBody]User user)
        {
            User _user = db.elUsers
                      .Where(s => s.Username == user.Username && s.Password == user.Password)
                      .FirstOrDefault<User>();
            return _user;
        }

        

        // GET: api/Todo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetAll()
        {
            return await db.elUsers.ToListAsync();
        }

        // GET: api/Todo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await db.elUsers.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        [HttpPost]
        public async Task<ActionResult<User>> Create([FromBody]User user)
        {
            db.elUsers.Add(user);
            await db.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
        }
        
        // PUT: api/Todo/
        [HttpPut]
        public async Task<IActionResult> UpdateProduct([FromBody]User user)
        {
            db.Entry(user).State = EntityState.Modified;
            await db.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/Todo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(long id)
        {
            var user = await db.elUsers.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            db.elUsers.Remove(user);
            await db.SaveChangesAsync();

            return NoContent();
        }

        /*
        // POST: elUsers/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(User user)
        {
            try
            {
                // TODO: Add insert logic here
                if (ModelState.IsValid)
                {
                    db.elUsers.Add(user);
                    db.SaveChanges();
                    return RedirectToAction(nameof(GetAll));
                }
            }
            catch
            {
                ModelState.AddModelError("","Unable to save changes. Try again, and if the problem persists see your system admin");
            }

            return View(user);
        }

        // POST: elUsers/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id,User user)
        {
            try
            {
                // TODO: Add update logic here
                if (ModelState.IsValid)
                {
                    db.Entry(user).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                    db.SaveChanges();
                    return RedirectToAction("GetAll");
                }
                return RedirectToAction(nameof(GetAll));
            }
            catch
            {
                ModelState.AddModelError("", "Unable to save changes. Try again, and if the problem persists see your system admin");
            }

            return View(user);
        }

        // POST: elUsers/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id)
        {
                // TODO: Add delete logic here
                User user = db.elUsers.Find(id);
                db.elUsers.Remove(user);
                db.SaveChanges();
                return RedirectToAction(nameof(GetAll));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }*/
    }
}