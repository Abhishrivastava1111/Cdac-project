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
using WebGrease.Css.Extensions;

namespace Helpers_planet.Controllers
{
    public class rolesController : ApiController
    {
        private Cdac_finalEntities2 db = new Cdac_finalEntities2();

        // GET: api/roles
        public List<rolesDto> Getroles()
        {
           List<role> roles = db.roles.ToList();
            List<rolesDto> rolesDto= new List<rolesDto>();  
           foreach (role role in roles) {
               rolesDto dto = new rolesDto();   
                dto.role_id = role.Id;
                dto.user_id = role.user_id;
                dto.role_id = role.role_id;
                rolesDto.Add(dto);  
                    }
            return rolesDto  ;
        }

        // GET: api/roles/5
        [ResponseType(typeof(role))]
        public IHttpActionResult Getrole(int id)
        {
            role role = db.roles.Find(id);
            if (role == null)
            {
                return NotFound();
            }
            else
            {
                rolesDto roleDto = new rolesDto();
                roleDto.Id = role.Id;
                roleDto.role_id = role.role_id;
                roleDto.user_id = role.user_id;
                return Ok(roleDto);
            }
        }

        // PUT: api/roles/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putrole(int id, role role)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != role.Id)
            {
                return BadRequest();
            }

            db.Entry(role).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!roleExists(id))
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

        // POST: api/roles
        [ResponseType(typeof(role))]
        public IHttpActionResult Postrole(role role)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.roles.Add(role);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (roleExists(role.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = role.Id }, role);
        }

        // DELETE: api/roles/5
        [ResponseType(typeof(role))]
        public IHttpActionResult Deleterole(int id)
        {
            role role = db.roles.Find(id);
            if (role == null)
            {
                return NotFound();
            }

            db.roles.Remove(role);
            db.SaveChanges();

            return Ok(role);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool roleExists(int id)
        {
            return db.roles.Count(e => e.Id == id) > 0;
        }
    }
}