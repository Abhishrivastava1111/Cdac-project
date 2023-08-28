using AdminSide.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace AdminSide.Controllers
{
    [Authorize]
    public class AdminController : Controller
    {
        public static decimal? total = 4000;


        // GET: Admin
        public ActionResult Index()
        {
            TempData["userName"] = User.Identity.Name;
            return View();
        }

        public ActionResult HighLevelReport()
        {
            using (var cdac_FinalEntities = new Cdac_finalEntities())
            {
                var result = cdac_FinalEntities.users
                    .Join(cdac_FinalEntities.roles, user => user.user_id, role => role.user_id, (user, role) => new { user, role })
                    .Join(cdac_FinalEntities.role_names, ur => ur.role.role_id, roleName => roleName.role_id, (ur, roleName) => new { ur.user, roleName })
                    .GroupBy(x => x.roleName.role_name)
                    .Select(g => new ReportViewModel
                    {
                        RoleName = g.Key,
                        Count = g.Count()
                    })
                    .ToList();
                cdac_FinalEntities.contributions.ToList().ForEach(contribution => { total = total + contribution.contribution1; });
                TempData["TotalContribution"] = total;
                return View(result);
            }

        }


        public ActionResult ViewEmp()

        {
            Cdac_finalEntities db = new Cdac_finalEntities();
            var workerIds = db.roles.Where(r => r.role_id == 3).Select(r => r.user_id).ToList();

            var workers = db.users.Where(user => workerIds.Contains(user.user_id)).ToList();

            return View(workers);
        }

        [HttpGet]
        public ActionResult EditEmp(int id)
        {
            Cdac_finalEntities db = new Cdac_finalEntities();
            return View(db.users.Find(id));
        }
        [HttpPost]
        public ActionResult EditEmp(user u)
        {
            Cdac_finalEntities db = new Cdac_finalEntities();
            user UserToBeEdited = db.users.Find(u.user_id);
            UserToBeEdited.name = u.name;
            UserToBeEdited.address = u.address;
            UserToBeEdited.email = u.email;
            UserToBeEdited.mobile = u.mobile;
            UserToBeEdited.pan = u.pan;
            db.SaveChanges();
            return RedirectToAction("/ViewEmp");
        }

        [HttpGet]
        public ActionResult DelEmp(int id)
        {
            Cdac_finalEntities cdac_FinalEntities = new Cdac_finalEntities();
            user u = cdac_FinalEntities.users.Find(id);
            cdac_FinalEntities.users.Remove(u);
            cdac_FinalEntities.SaveChanges();
            return RedirectToAction("/ViewEmp");
        }

        [HttpGet]
        public ActionResult ViewCampaign()
        {
            Cdac_finalEntities db = new Cdac_finalEntities();

            return View(db.campaigns.Where(r => r.status == 1).ToList()); ;
        }

        public ActionResult PastCampaign()
        {
            Cdac_finalEntities db = new Cdac_finalEntities();
            return View(db.campaigns.Where(r => r.status != 1).ToList());
        }

        public ActionResult AddCampaign() {
            return RedirectToRoute("http://localhost:3000/ADLogin");
        }

        public ActionResult EditProfile()
        {
            Cdac_finalEntities db = new Cdac_finalEntities();
            user user = (user)db.users.Where(u => u.email == User.Identity.Name).First();
            return View(user);
        }

        public ActionResult UpdateProfile(user updatedUser)
        {
            Cdac_finalEntities db = new Cdac_finalEntities();
            user userToBeUpdated = db.users.Find(updatedUser.user_id);
            userToBeUpdated.email = updatedUser.email;
            userToBeUpdated.name = updatedUser.name;
            userToBeUpdated.pan = updatedUser.pan;
            userToBeUpdated.mobile = updatedUser.mobile;
            userToBeUpdated.address = updatedUser.address;
            db.SaveChanges();

            return RedirectToAction("/ViewProfile");
        }

        public ActionResult ViewProfile() {
            Cdac_finalEntities db = new Cdac_finalEntities();
            user user = (user)db.users.Where(u => u.email == User.Identity.Name).First();
            return View(user);
        }

         
    }



}