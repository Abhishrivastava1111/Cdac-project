using Helpers_planet.DTOs;
using Helpers_planet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;


namespace Helpers_planet.Controllers
{
    //[Authorize]
    public class userController : ApiController
    {
        Cdac_finalEntities2 cdac_FinalEntities2 = new Cdac_finalEntities2();
        // GET api/value
        [HttpGet]
        public List<UserDto> GetAll()
        {
            List<UserDto> users = new List<UserDto>();
            foreach (user user in cdac_FinalEntities2.users.Where(u=>u.user_id==4))
            {
                UserDto userDto = new UserDto();
                userDto.user_id = user.user_id;
                userDto.name = user.name;
                userDto.email = user.email; 
                userDto.address = user.address; 
                userDto.mobile = user.mobile;   
                

                users.Add(userDto); 

               
            }
            return users;
           /* return cdac_FinalEntities2.users.ToList();*/
        }


        [HttpGet]
        public UserDto GetOneById(int id)
        {
           user user = cdac_FinalEntities2.users.Find(id);
            UserDto userDto = new UserDto();
            userDto.user_id = user.user_id;
            userDto.name = user.name;
            userDto.email = user.email;
            userDto.address = user.address;
            userDto.mobile = user.mobile;
            userDto.pan = user.pan;
            userDto.password = user.password;
            return userDto;
        }

        [HttpPost] 
         
        public void AddUser(dynamic obj, int id)
        { 
             
            user tempObj = new user();
            tempObj.name = obj.Fname + " " + obj.Lname;
            tempObj.email   = obj.email;
            tempObj.address = obj.address;  
            tempObj.mobile = obj.mobile;    
            tempObj.pan = obj.pan;
            tempObj.password = obj.password;
           
            cdac_FinalEntities2.users.Add(tempObj);

            cdac_FinalEntities2.SaveChanges();
           int User_id = cdac_FinalEntities2.users.Where(u => u.email == tempObj.email).First().user_id;
            role role = new role();
            
           
            role.user_id= User_id;
            role.role_id = id;
            cdac_FinalEntities2.roles.Add(role);
            cdac_FinalEntities2.SaveChanges();
        }

        [HttpPut]
        public void Update(user u, int id)
        {
            Cdac_finalEntities2 cdac = new Cdac_finalEntities2();
            
           user userToBeUpdated = cdac.users.Find(id);
            userToBeUpdated.name  = u.name; 
            userToBeUpdated.email = u.email;
            
            userToBeUpdated.address = u.address;
            userToBeUpdated.mobile = u.mobile;
             

            cdac.SaveChanges();
        }

        [System.Web.Http.HttpDelete]
        public string DeleteById(int id)
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
