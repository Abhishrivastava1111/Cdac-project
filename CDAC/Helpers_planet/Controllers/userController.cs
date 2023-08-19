using Helpers_planet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Helpers_planet.Controllers
{
    //[Authorize]
    public class userController : ApiController
    {
        Cdac_finalEntities2 cdac_FinalEntities2 = new Cdac_finalEntities2();
        // GET api/values
        public IEnumerable<user> Get()
        {
            return cdac_FinalEntities2.users.ToList();
        }

        // GET api/values/5
        public user Get(int id)
        {
            return cdac_FinalEntities2.users.Find(id);
        }

        // POST api/values
        public void Post(user obj)
        {
             cdac_FinalEntities2.users.Add(obj);
            cdac_FinalEntities2.SaveChanges();
            
        }

        // PUT api/values/5
        public void Put(user u)
        {
           user userToBeUpdated = cdac_FinalEntities2.users.Find(u.user_id);
            userToBeUpdated.name  = u.name; 
            userToBeUpdated.email = u.email;
            userToBeUpdated.password = u.password;
            userToBeUpdated.address = u.address;

            cdac_FinalEntities2.SaveChanges();
        }

        // DELETE api/values/5
        public string Delete(int id)
        {

            user u = cdac_FinalEntities2.users.Find(id);
            if (u == null)
            {
                return "Not found";
            }
            else
            {
                cdac_FinalEntities2.users.Remove(u);
                cdac_FinalEntities2.SaveChanges();
                return "Action Completed";
            }
        }
    }
}
