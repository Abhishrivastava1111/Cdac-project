using Helpers_planet.DTOs;
using Helpers_planet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web.Http;
using System.Web.Http.Cors;
using static System.Net.WebRequestMethods;

namespace Helpers_planet.Controllers
{
    public class MailService
    {
        public static int GenerateOtp()
        {
            Random rand = new Random();
            return rand.Next(1000, 10000);

        }
        static int Otp = GenerateOtp();
        // Configure your SMTP settings
        string smtpServer = "smtp.gmail.com";
        int smtpPort = 587;
        string smtpUsername = "abhishrivastava2407@gmail.com";
        string smtpPassword = "cjxpwcqvvzauedph";

        // Create the email message
        public string Send(string email)
        {

            MailMessage Message = new MailMessage();

            Message.From = new MailAddress(smtpUsername);

            Message.To.Add(email);
            Message.Subject = "Verification Code";
            Message.Body = $"Your verification code is: {Otp} please do not share this with anyone";

            // Configure the SMTP client
            SmtpClient smtpClient = new SmtpClient(smtpServer, smtpPort);
            smtpClient.UseDefaultCredentials = false;
            smtpClient.Credentials = new NetworkCredential(smtpUsername, smtpPassword);
            smtpClient.EnableSsl = true;

            // Send the email
            smtpClient.Send(Message);
            return "Otp Send To your email successfully!!";
        }

        internal bool verifyOtp(int UserOtp)
        {
            if (Otp == UserOtp)
            {
                return true;
            }
            return false;
        }
    }
    [EnableCors("*","*","*")]
    public class LoginController : ApiController
    {

        
       // [Route("login/checkotp")]
        [HttpGet]
        public ResponseEntity CheckOtp(int id)
        {
            ResponseEntity response = new ResponseEntity();
            MailService mailService = new MailService();
            bool flag = mailService.verifyOtp(id);
            if (flag){
                return new ResponseEntity() { status = 200, message = "success" };
            }
            else {
                return new ResponseEntity() { status = 401, message = "Invalid Credentials" };
                }
           }
        [HttpPost]
        public ResponseEntity userLogin(Credential cred)
        {

          Cdac_finalEntities2 db = new Cdac_finalEntities2();
            List<user> users = db.users.ToList();
            foreach (user user in users)
            {
                 if(user.email == cred.email&& user.password == cred.password) {
                    MailService mailService = new MailService();
                    mailService.Send(cred.email);
                    ResponseEntity responseEntity = new ResponseEntity();
                    responseEntity.status = 200;
                    responseEntity.message = "Enter the otp";
                    responseEntity.email = user.email;
                    responseEntity.user_id = user.user_id;
                    responseEntity.role_id = (int)db.roles.Where(r => r.user_id == user.user_id).First().role_id;
                    return responseEntity;
                }
                
            }
            return new ResponseEntity() { status=401, message="Invalid Credentials"};
        }
    }




   
}
