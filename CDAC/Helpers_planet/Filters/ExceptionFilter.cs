using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Filters;

namespace Helpers_planet.Filters
{
    public class ExceptionFilter: ExceptionFilterAttribute

    {
        public override void OnException(HttpActionExecutedContext actionExecutedContext)
        {
            
            Logger.Logger.Currrent.CreateLog("#####################","Exception");
            Logger.Logger.Currrent.CreateLog("Problem In " + actionExecutedContext.Request.RequestUri.ToString(), "Exception");  
               // RequestContext.HttpContext.Request.Url) ;
            Logger.Logger.Currrent.CreateLog("Technical Details are: " +
                actionExecutedContext.Exception.Message, "Exception");
   
            Logger.Logger.Currrent.CreateLog("#####################", "Exception");
            ;
        }
    }
}