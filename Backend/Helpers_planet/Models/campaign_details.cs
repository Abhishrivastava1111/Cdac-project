//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Helpers_planet.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class campaign_details
    {
        public int Id { get; set; }
        public Nullable<int> user_id { get; set; }
        public Nullable<int> campaign_id { get; set; }
    
        public virtual campaign campaign { get; set; }
        public virtual user user { get; set; }
    }
}
