using AdminSide.Models;
using Microsoft.Ajax.Utilities;
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
            if (ReturnUrl == "")
                ReturnUrl = ReturnUrl = "/Admin/Index";
            Cdac_finalEntities db = new Cdac_finalEntities();
            var user1 = db.users.FirstOrDefault(u => u.email == user.UserName && u.password == user.password);
            if (user != null)
            {
                var isAdmin = db.roles.Any(r => r.user_id == user1.user_id && r.role_id == 1);
                if (isAdmin)
                {
                    TempData["userName"] = user1.email;
                    FormsAuthentication.SetAuthCookie(user1.email, false);
                    return Redirect(ReturnUrl);
                }
            }
            return  RedirectToAction("/Authorize");
        }
    }
}