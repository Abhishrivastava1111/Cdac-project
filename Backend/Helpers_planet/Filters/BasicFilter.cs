using Helpers_planet.Logger;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace Helpers_planet.Filters
{
    public class BasicFilter: ActionFilterAttribute
    {
        public override void OnActionExecuted(HttpActionExecutedContext filterContext)
        {
            string ControllerName = filterContext.ActionContext.ControllerContext.ControllerDescriptor
                .ControllerName;


            string ActionMethod = filterContext.ActionContext.ActionDescriptor.ActionName;
            string message = string.Format("Controller -{0}, Method -{1}", ControllerName, ActionMethod);
            Logger.Logger.Currrent.CreateLog(message, "Basic Logging");
           
        }
        public override void OnActionExecuting(HttpActionContext actionContext)
        {
            string ControllerName = actionContext.ControllerContext.ControllerDescriptor.ControllerName;
            string method = actionContext.ActionDescriptor.ActionName;
            Logger.Logger.Currrent.CreateLog($"{ControllerName}", "Basic Logging");

          
        }
        /* public override void OnResultExecuted(ResultExecutedContext filterContext)
         {

         }

         public override void OnResultExecuting(ResultExecutingContext filterContext)
         {

         }*/
    }
    }
