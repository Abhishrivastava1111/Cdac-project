import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './volunteer.css';

function AddingHelpervolunter() {
    const [message, setmessage] = useState("");
    const [volunteer, setvolunteer] = useState({
      
        Fname: "",Lname:"", address: "", email: "", mobile: "", pan: "",  password:""
    });

    var onTextChanged = (args) => {
        var copyOfvolunteer = { ...volunteer };
        copyOfvolunteer[args.target.name] = args.target.value;
        setvolunteer(copyOfvolunteer);
    }

    var handleSubmit = () => {
        debugger
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

        helper.open("POST", "http://localhost:57380/user/AddUser");
        helper.setRequestHeader("content-type", "application/json");
        helper.send(JSON.stringify(volunteer));
    }

    var ShowMessage = (urmessage) => {
        setmessage(urmessage);
        window.setTimeout(() => {
            setmessage("");
        }, 5000);
    }

        

    return (
      
        <table >
          
            <tbody>
            <tr>
                {/* <td height={950}>
                    <aside className='floatleftdonS'>
                        <h2><Link to="/helper" style={{ color: 'black' }}>
                        Adding Helper
                        </Link></h2>
                        <h2><a href="" style={{ color: 'black' }}>Register for a campaign </a></h2>
                    </aside>
                </td> */}
                <td width={1500}>
                    <center><div  className="shadow-boxshubhu" >
                        <center><h1><b>Adding Helper</b></h1></center>
                        <hr></hr>
                        <form onSubmit={handleSubmit}>
                        <label>First Name</label>
                        <input type="text" className="input-field" placeholder="First Name"   name = 'Fname' value={volunteer.Fname}
            onChange={onTextChanged}  />
                        <br></br>
                        <hr></hr>
                        <label>Last Name</label>
                        <input type="text" className="input-field" placeholder="Last Name"   name = 'Lname' value={volunteer.Lname}
            onChange={onTextChanged}  />
            <br></br>
                        <hr></hr>
                        <label>Address</label>
                        <input type="text" className="input-field" placeholder="Address"   name = 'address' value={volunteer.address}
            onChange={onTextChanged} />
                        <br></br>
                        <hr></hr>
                        <label>Email</label>
                        <input type="text" className="input-field" placeholder="email"   name = 'email' value={volunteer.email}
            onChange={onTextChanged} />
                        <br></br>
                        <hr></hr>
                        <label>Mobile</label>
                        <input type="text" className="input-field" placeholder="mobile"   name = 'mobile'  value={volunteer.mobile}
            onChange={onTextChanged} />
                        <br></br>
                        <hr></hr>
                        <label>PAN</label>
                        <input type="text" className="input-field" placeholder="pan"   name = 'pan' value={volunteer.pan}
            onChange={onTextChanged} />
                        <br></br>
                        <hr></hr>
                        <label>Password</label>
                        <input type="text" className="input-field" placeholder="password"   name = 'password' value={volunteer.password}
            onChange={onTextChanged} />
                        <br></br>
                        {/* <hr></hr>
                        <label>Need</label>
                        <input type="text" className="input-field" placeholder="Add Vision"   name = 'need' value={volunteer.need}
            onChange={onTextChanged} />
                        <br></br>
                        <hr></hr> */}
                        <center><button type="submit" className="bottom-button1shubhu">Submit</button></center>
                        </form>
                    </div></center>
                </td>
                {/* <td height={950}>
                    <aside className='floatrightdonS'>
                        <h2><Link to="/showprofile" style={{ color: 'black' }}>Show Profile</Link></h2>
                        <h2><a href="/updateprofile" style={{ color: 'black' }} >Edit Profile</a></h2>
                        <h2><a href="" style={{ color: 'black' }} >Logout</a></h2>
                    </aside>
                </td> */}
            </tr>
            </tbody>
        </table>

    






















    )
}

export default AddingHelpervolunter;