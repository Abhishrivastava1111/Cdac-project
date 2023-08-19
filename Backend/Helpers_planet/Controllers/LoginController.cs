using Helpers_planet.DTOs;
using Helpers_planet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace Helpers_planet.Controllers
{
    public class LoginController : ApiController
    {
        public bool userLogin(Credential cred)
        {
          Cdac_finalEntities2 db = new Cdac_finalEntities2();
            List<user> users = db.users.ToList();
            foreach (user user in users)
            {
                 if(user.email == cred.email&& user.password == cred.password) {
                    return true;
                }
                
            }
            return false;
        }
    }
}
