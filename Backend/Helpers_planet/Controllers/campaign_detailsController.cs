using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using Helpers_planet.Filters;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Helpers_planet.Models;

namespace Helpers_planet.Controllers
{
    [BasicFilter]
    public class Campaign_detailsController : BaseController
    {
        private Cdac_finalEntities2 db = new Cdac_finalEntities2();

        // GET: api/campaign_details
        public IQueryable<campaign_details> Getcampaign_details()
        {
            return db.campaign_details;
        }

        // GET: api/campaign_details/5
        [ResponseType(typeof(campaign_details))]
        public IHttpActionResult Getcampaign_details(int id)
        {
            campaign_details campaign_details = db.campaign_details.Find(id);
            if (campaign_details == null)
            {
                return NotFound();
            }

            return Ok(campaign_details);
        }

        // PUT: api/campaign_details/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putcampaign_details(int id, campaign_details campaign_details)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != campaign_details.Id)
            {
                return BadRequest();
            }

            db.Entry(campaign_details).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!campaign_detailsExists(id))
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

        // POST: api/campaign_details
        [ResponseType(typeof(campaign_details))]
        public IHttpActionResult Postcampaign_details(campaign_details campaign_details)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.campaign_details.Add(campaign_details);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (campaign_detailsExists(campaign_details.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = campaign_details.Id }, campaign_details);
        }

        // DELETE: api/campaign_details/5
        [ResponseType(typeof(campaign_details))]
        public IHttpActionResult Deletecampaign_details(int id)
        {
            campaign_details campaign_details = db.campaign_details.Find(id);
            if (campaign_details == null)
            {
                return NotFound();
            }

            db.campaign_details.Remove(campaign_details);
            db.SaveChanges();

            return Ok(campaign_details);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool campaign_detailsExists(int id)
        {
            return db.campaign_details.Count(e => e.Id == id) > 0;
        }
    }
}