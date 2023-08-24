import { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../common.css';
import user from "../image/user_456212.png"

function Donarprofile() {
    const [message, setmessage] = useState("");
    const [donor, setdonor] = useState({
        Fname: "", Lname: "", email: "", mno: "", Add: "", pin: ""
    });

    var onTextChanged = (args) => {
        var copyOfdonor = { ...donor };
        copyOfdonor[args.target.name] = args.target.value;
        setdonor(copyOfdonor);
    }

    var EditDonar = () => {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            if (helper.readyState === 4 && helper.status === 200) {
                var result = JSON.parse(helper.responseText);
                if (result.affectedRows > 0) {
                    ShowMessage("Record Edit Successfully");
                } else {
                    ShowMessage("Something went wrong!");
                }
            }
        }

        helper.open("POST", "*****");
        helper.setRequestHeader("content-type", "application/json");
        helper.send(JSON.stringify(donor));
    }

    var ShowMessage = (urmessage) => {
        setmessage(urmessage);
        window.setTimeout(() => {
            setmessage("");
        }, 5000);
    }

    return (
       <div className="shadow-box">
            
      
        <div className='input-container '>
        <img src={user} alt="hello" width="100" height="100"></img>
             <hr></hr>
            <label>First Name</label>
            <input type="text"
            name = 'Fname'
            className="input-field"
            value={donor.Fname}
            onChange={onTextChanged}
            placeholder="First Name" />
         
            <br></br>
            <label>Last Name</label>
            <input type="text"
            value={donor.Lname}
            name = "Lname" 
            onChange={onTextChanged}
            className="input-field" placeholder="Last Name" />
            <br></br>
            <label>Email</label>
            <input type="text"
            name='email'
            value={donor.email}
            onChange={onTextChanged} 
            className="input-field" placeholder="Email" />
            <br></br>
            <label>Mobile Number</label>
            <input type="text"
            name='mno'
            value={donor.mno}
            onChange={onTextChanged} 
            className="input-field" placeholder="Mobile Number" />
            <br></br>
            <label>Address</label>
            <input type="text"
            name='Add'
            value={donor.Add}
            onChange={onTextChanged} 
            className="input-field" placeholder="Address" />
            <br></br>
            <label>Pincode</label>
            <input type="text"
            name='pin'
            value={donor.pin}
            onChange={onTextChanged} 
            className="input-field" placeholder="Pincode" />
            <br></br>
                
                <div className="button-container">
                    <button onClick={EditDonar} className='bottom-button1'>
                        Edit
                    </button>
                    <button type="button" className="bottom-button1">
                        Back
                    </button>
                </div>
            </div>
        </div>
      
    )
}

export default Donarprofile;
