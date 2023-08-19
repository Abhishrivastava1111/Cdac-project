using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Helpers_planet.DTOs
{
    public class ContributionDto
    {

        public int user_id { get; set; }
        public int contribution { get; set; }
        public int vision { get; set; }
        public int date { get; set; }
        public int campaign_id { get; set; }

    }
}