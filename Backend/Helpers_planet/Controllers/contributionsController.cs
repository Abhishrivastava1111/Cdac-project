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
    public class contributionsController : ApiController
    {
        private Cdac_finalEntities2 db = new Cdac_finalEntities2();

        // GET: api/contributions
        public IQueryable<contribution> Getcontributions()
        {
            return db.contributions;
        }

        // GET: api/contributions/5
        [ResponseType(typeof(contribution))]
        public IHttpActionResult Getcontribution(int id)
        {
            contribution contribution = db.contributions.Find(id);
            if (contribution == null)
            {
                return NotFound();
            }

            return Ok(contribution);
        }

        [HttpPut]
        [ResponseType(typeof(void))]
        public IHttpActionResult Putcontribution(int id, contribution contribution)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != contribution.contribution_id)
            {
                return BadRequest();
            }

            db.Entry(contribution).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!contributionExists(id))
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

        [HttpPost]
        // POST: api/contributions
        [ResponseType(typeof(contribution))]
        public IHttpActionResult NewContro(contribution contribution)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.contributions.Add(contribution);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = contribution.contribution_id }, contribution);
        }

        // DELETE: api/contributions/5
        [ResponseType(typeof(contribution))]
        public IHttpActionResult Deletecontribution(int id)
        {
            contribution contribution = db.contributions.Find(id);
            if (contribution == null)
            {
                return NotFound();
            }

            db.contributions.Remove(contribution);
            db.SaveChanges();

            return Ok(contribution);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool contributionExists(int id)
        {
            return db.contributions.Count(e => e.contribution_id == id) > 0;
        }
    }
}