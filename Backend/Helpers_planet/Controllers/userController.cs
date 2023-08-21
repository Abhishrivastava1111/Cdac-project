﻿using Helpers_planet.DTOs;
using Helpers_planet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Helpers_planet.Controllers
{
    //[Authorize]
    public class userController : ApiController
    {
        Cdac_finalEntities2 cdac_FinalEntities2 = new Cdac_finalEntities2();
        // GET api/values
        public List<UserDto> Get()
        {
            List<UserDto> users = new List<UserDto>();
            foreach (user user in cdac_FinalEntities2.users)
            {
                UserDto userDto = new UserDto();
                userDto.user_id = user.user_id;
                userDto.name = user.name;
                userDto.email = user.email; 
                userDto.address = user.address; 
                userDto.mobile = user.mobile;   
                userDto.pan  = user.pan;
                userDto.password = user.password;   

                users.Add(userDto); 

               
            }
            return users;
           /* return cdac_FinalEntities2.users.ToList();*/
        }

        // GET api/values/5
        public user Get(int id)
        {
            return cdac_FinalEntities2.users.Find(id);
        }

        // POST api/values
        public void Post(dynamic obj)
        {
            user tempObj = new user();
            tempObj.name = obj.firstName + " " + obj.lastName;
            tempObj.email   = obj.email;
            tempObj.address = obj.address;  
            tempObj.mobile = obj.mobileNumber;    
            tempObj.pan = obj.Pan;
               tempObj.password = obj.password;
           
             cdac_FinalEntities2.users.Add(tempObj);
            cdac_FinalEntities2.SaveChanges();
            
        }

        // PUT api/values/5
        public void Put(user u)
        {
           user userToBeUpdated = cdac_FinalEntities2.users.Find(u.user_id);
            userToBeUpdated.name  = u.name; 
            userToBeUpdated.email = u.email;
            userToBeUpdated.password = u.password;
            userToBeUpdated.address = u.address;

            cdac_FinalEntities2.SaveChanges();
        }

        // DELETE api/values/5
        public string Delete(int id)
        {

            user u = cdac_FinalEntities2.users.Find(id);
            if (u == null)
            {
                return "Not found";
            }
            else
            {
                cdac_FinalEntities2.users.Remove(u);
                cdac_FinalEntities2.SaveChanges();
                return "Action Completed";
            }
        }
    }
}
