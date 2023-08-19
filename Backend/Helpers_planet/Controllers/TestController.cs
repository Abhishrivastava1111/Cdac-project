using System;
using System.Net;
using System.Web.Http;
using Helpers_planet.Filters;

namespace Helpers_planet.Controllers
{
    [ExceptionFilter] // Apply your custom exception filter
    public class TestController : ApiController
    {
        [HttpGet]
        [Route("api/test/exception")]
        public IHttpActionResult GenerateException()
        {
            // Simulate an exception for testing purposes
            throw new ApplicationException("This is a test exception.");
        }
    }
}
