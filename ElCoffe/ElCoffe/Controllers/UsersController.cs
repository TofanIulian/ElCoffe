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
    [Route("api/Users")]
    public class UsersController : Controller
    {
        private DbConn db = new DbConn();
        // GET: Users
        public ActionResult GetAll()
        {
            var users = db.Users;
            return View(users.ToList());
        }

        // GET: Users/Details/5
        [HttpGet("GetByUsername/{username}")]
        public ActionResult GetByUsername(string username)
        {
            User user = db.Users
                      .Where(s => s.Username == username)
                      .FirstOrDefault<User>();
            //User user = db.Users.Find(username);
            if(user == null)
            {
                //return HttpNotFound();
            }

            return View(user);
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