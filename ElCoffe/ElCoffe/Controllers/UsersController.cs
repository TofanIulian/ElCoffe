using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using ElCoffe.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Web;
using Microsoft.AspNetCore.Routing;

namespace ElCoffe.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private DbConn db = new DbConn();
        // GET: Users
        //[HttpGet("[action]")]
        //public int GetAll()
        //{
        //    var users = db.Users.F;
        //    return users.ToList();
        //}
        /*
         o functie login care returneaza un boolean care primeste un UserDTO :username,parola
         verific daca exista un user cu acel username si cu acea parola

             */
        [HttpGet("GetByUsername/{username}")]
        public User Login(User usr)
        {
            User user = db.Users
                      .Where(s => s.Username == usr.Username && s.Password == usr.Password)
                      .FirstOrDefault<User>();
            return user;
        }

        // POST: Users/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(User user)
        {
            try
            {
                // TODO: Add insert logic here
                if (ModelState.IsValid)
                {
                    db.Users.Add(user);
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

        // POST: Users/Edit/5
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

        // POST: Users/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id)
        {
                // TODO: Add delete logic here
                User user = db.Users.Find(id);
                db.Users.Remove(user);
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
        }
    }
}