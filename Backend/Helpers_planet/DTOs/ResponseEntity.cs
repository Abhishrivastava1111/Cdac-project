using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Helpers_planet.DTOs
{
    public class ResponseEntity
    {
        public int user_id { get; set; }
        public int role_id { get; set; }
        public string email { get; set; }
        public int status { get; set; }
        public string message { get; set; }
        public ResponseEntity() { }

    }
}