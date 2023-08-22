import { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './common.css';
import user from "./img/user_456212.png"

function Donarprofile()
{
   
   
  
    return (
        <div className='container'>
            
      
    <div className='input-container '>
    <img src={user} alt="Girl in a jacket" width="100" height="100"></img>
        <label>First Name</label>
        <input type="text" className="input-field" placeholder="First Name" />
        <br></br>
        <label>Last Name</label>
        <input type="text" className="input-field" placeholder="Last Name" />
        <br></br>
        <label>Email</label>
        <input type="text" className="input-field" placeholder="Email" />
        <br></br>
        <label>Mobile Number</label>
        <input type="text" className="input-field" placeholder="Mobile Number" />
        <br></br>
        <label>Address</label>
        <input type="text" className="input-field" placeholder="Address" />
        <br></br>
        <label>Pincode</label>
        <input type="text" className="input-field" placeholder="Pincode" />
        <br></br>
        <div className="button-container">
            <button type="button" className="bottom-button1">
                Edit
            </button>
            <button type="button" className="bottom-button1">
                Back
            </button>
        </div>
    </div>
</div>
    )}
       
    
export default Donarprofile;