using AdminSide.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace AdminSide.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        public ActionResult Authorize()
        {
           
            return View();
        }
        [HttpGet]
        public ActionResult Logout()
        {
            FormsAuthentication.SignOut();

            return Redirect("/Admin/Index");     
        }

        [HttpPost]
        public ActionResult Login(AdUser user, string ReturnUrl)
        {
            Cdac_finalEntities db = new Cdac_finalEntities();
           List<user>list = db.users.ToList();
            foreach (var e in list)
            {
                if(e.email==user.UserName&& e.password==user.password) {
                    TempData["userName"]= e.email;
                    FormsAuthentication.SetAuthCookie(user.UserName, false);
                    return Redirect(ReturnUrl); }
            }
            return  RedirectToAction("/Authorize");
        }
    }
}