import { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../common.css';
import user from "../image/user_456212.png"

function Donarprofile() {
  
    const [donor, setdonor] = useState({
        name: "", address:"", email: "", mobile: "", address: "", pan: "",password:""
    });
    
  const load=()=>{
     
        console.log("Inside Component Did Mount..")
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>{
            if(helper.readyState === 4 &&
               helper.status === 200)
               {
                debugger;
                //console.log(helper.responseText);
            var data = JSON.parse(helper.responseText);
                console.log(helper.responseText)
                console.log("Setting State to Array in Component Did Mount & XHR Call")
                setdonor(data);
               }
        }
        helper.open("GET", 
                    "http://localhost:57380/User/12");
        helper.send();

    }

    return (
       <div onLoad={load()} className="shadow-boxshubhu">
            
      
        <div className='input-containershubhu'>
        <img src={user} alt="hello" width="100" height="100"></img>
             <hr></hr>
            <label>First Name</label>
            <input type="text"
            name = 'name'
            className="input-fieldshubhu"
            value={donor.name}
           />

            <br></br>
            <label>Email</label>
            <input type="text"
            name='email'
            value={donor.email}
           
            className="input-fieldshubhu" />
            <br></br>
            <label>Mobile Number</label>
            <input type="text"
            name='mobile'
            value={donor.mobile}
            
            className="input-fieldshubhu"  />
            <br></br>
            <label>Address</label>
            <input type="text"
            name='address'
            value={donor.address}
           
            className="input-fieldshubhu" />
            <br></br>
            <label>Pan</label>
            <input type="text"
            name='pan'
            value={donor.pan}
          
            className="input-fieldshubhu"  />
            <br></br>
            <br></br>
            <label>Password</label>
            <input type="text"
            name='password'
            value={1665656}
          
            className="input-fieldshubhu"  />
            <br></br>
                


                <div className="button-containershubhu">
                   
                    <button type="button" className="bottom-button1shubhu">
                        Back
                    </button>
                </div>
            </div>
        </div>
      
    )
}

export default Donarprofile;