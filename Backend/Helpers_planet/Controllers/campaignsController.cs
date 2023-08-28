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
using Helpers_planet.DTOs;
using Helpers_planet.Models;

namespace Helpers_planet.Controllers
{
    public class campaignsController : ApiController
    {
        private Cdac_finalEntities2 db = new Cdac_finalEntities2();

        // GET: api/campaigns
        [Route("campaign")]
        public IQueryable<campaign> Getcampaigns()
        {
            return db.campaigns;
        }

        // GET: api/campaigns/5
        [ResponseType(typeof(campaign))]
        public IHttpActionResult Getcampaign(int id)
        {
            campaign campaign = db.campaigns.Find(id);
            if (campaign == null)
            {
                return NotFound();
            }

            return Ok(campaign);
        }

         
        [HttpPut]
        public IHttpActionResult editCampaign(int id, campaign campaign)
        { 
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != campaign.campaign_id)
            {
                return BadRequest();
            }

            db.Entry(campaign).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!campaignExists(id))
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

        // POST: api/campaigns
        [Route("api/campaign")]
        [ResponseType(typeof(campaign))]
        public ResponseEntity Postcampaign(campaign campaign)
        {
            campaign.status = 1;    
            if (!ModelState.IsValid)
            {
                return new ResponseEntity() { status=500, message="Value Not Added" };
            }

            db.campaigns.Add(campaign);
            db.SaveChanges();

            return new ResponseEntity() { status = 200, message = "success" };
        }

        // DELETE: api/campaigns/5
        [ResponseType(typeof(campaign))]
        public IHttpActionResult Deletecampaign(int id)
        {
            campaign campaign = db.campaigns.Find(id);
            if (campaign == null)
            {
                return NotFound();
            }

            db.campaigns.Remove(campaign);
            db.SaveChanges();

            return Ok(campaign);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool campaignExists(int id)
        {
            return db.campaigns.Count(e => e.campaign_id == id) > 0;
        }
    }
}