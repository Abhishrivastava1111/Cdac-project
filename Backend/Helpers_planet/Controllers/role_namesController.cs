using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Helpers_planet.Models;

namespace Helpers_planet.Controllers
{
    public class role_namesController : ApiController
    {
        private Cdac_finalEntities2 db = new Cdac_finalEntities2();

        // GET: api/role_names
        public IQueryable<role_names> Getrole_names()
        {
            return db.role_names;
        }

        // GET: api/role_names/5
        [ResponseType(typeof(role_names))]
        public IHttpActionResult Getrole_names(int id)
        {
            role_names role_names = db.role_names.Find(id);
            if (role_names == null)
            {
                return NotFound();
            }

            return Ok(role_names);
        }

        // PUT: api/role_names/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putrole_names(int id, role_names role_names)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != role_names.role_id)
            {
                return BadRequest();
            }

            db.Entry(role_names).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!role_namesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/role_names
        [ResponseType(typeof(role_names))]
        public IHttpActionResult Postrole_names(role_names role_names)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.role_names.Add(role_names);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = role_names.role_id }, role_names);
        }

        // DELETE: api/role_names/5
        [ResponseType(typeof(role_names))]
        public IHttpActionResult Deleterole_names(int id)
        {
            role_names role_names = db.role_names.Find(id);
            if (role_names == null)
            {
                return NotFound();
            }

            db.role_names.Remove(role_names);
            db.SaveChanges();

            return Ok(role_names);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool role_namesExists(int id)
        {
            return db.role_names.Count(e => e.role_id == id) > 0;
        }
    }
}