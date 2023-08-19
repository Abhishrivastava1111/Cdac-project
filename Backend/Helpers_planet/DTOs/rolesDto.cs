using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Helpers_planet.DTOs
{
    public class rolesDto
    {
        public int Id { get; set; }
        public Nullable<int> user_id { get; set; }
        public Nullable<int> role_id { get; set; }
    }
}