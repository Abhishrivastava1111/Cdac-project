using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Helpers_planet.DTOs
{
    public class CampaignDto
    {
        public int campaign_id { get; set; }
        public string title { get; set; }
        public string type { get; set; }
        public string goal { get; set; }
        public string description { get; set; }
        public Nullable<System.DateTime> start_date { get; set; }
        public Nullable<System.DateTime> end_date { get; set; }
        public Nullable<int> status { get; set; }
    }
}