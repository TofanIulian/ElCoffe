using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ElCoffe.Controllers
{
    public class ReservationsController : Controller
    {
        // GET: elReservations
        public ActionResult Index()
        {
            return View();
        }

        // GET: elReservations/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: elReservations/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: elReservations/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: elReservations/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: elReservations/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: elReservations/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: elReservations/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}