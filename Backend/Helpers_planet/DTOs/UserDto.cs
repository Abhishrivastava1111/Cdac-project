using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Helpers_planet.DTOs
{
    public class UserDto
    {
        public int user_id { get; set; }
        public string name { get; set; }
        public string address { get; set; }
        public string mobile { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string pan { get; set; }
    }
}