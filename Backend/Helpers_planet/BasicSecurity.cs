using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Helpers_planet;
using Helpers_planet.Models;


namespace Helpers_planet
{
    public class BasicSecurity
    {
        public static bool Login(string username, string password)
        {
            using(Cdac_finalEntities2 entities2 = new Cdac_finalEntities2())
            {
                return entities2.users.Any(user => user.name.Equals(username, StringComparison.OrdinalIgnoreCase) && user.password == password);
            }
        }
    }
}