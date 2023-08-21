import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './common.css';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

const RegistrationForm = () => {
    const nevigate= useNavigate();

const [formData, setFormData] = useState({
firstName: '',
lastName: '',
email: '',
mobileNumber: '',
address: '',
Pan: '',
password: '',
confirmPassword: '',
});
//to be removed as it is not as per my standard
const handleChange = (e) => {
const { name, value } = e.target;
setFormData((prevData) => ({
...prevData,
[name]: value,
}));
};

const login=()=>{
    nevigate('/login')
}

const handleSubmit = async (e) => {
e.preventDefault();
if(formData.password != formData.confirmPassword){
    toast.error('password does not match',{
        autoClose: 3000,
        position: 'top-left'
    })
}
// Handled form submission logic here
try{
   const success=  await axios.post('http://localhost:57380/user', formData)
  setTimeout(()=>{
    toast.success('data sent successfully',{
        position: 'top-right',
        autoClose: 3000
    })
  }, 1000)
}
catch(error){
    console.log(error);
    setTimeout(()=>{
        toast.error('It failed due to some reasons',{
            position: 'top-right',
            style:{width: '300', color: 'red'},
            autoClose: 3000
        })
      }, 100)   
    

    
}
// Reseting the form 
setFormData({
firstName: '',
lastName: '',
email: '',
mobileNumber: '',
address: '',
Pan: '',
password: '',
confirmPassword: '',
});
};

return (
    <div style={{marginBottom :'50px', marginTop: '50px'}}>
<div className="registration-form">

<center><h4 bgcolor="green">Welcome To Helpers Planet</h4></center>
<center><p><a href="#" className="redlink">Track Donations</a></p></center>
<form onSubmit={handleSubmit}>
<div className="form-group">
<label>First Name:</label>
<input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
</div>
<div className="form-group">
<label>Last Name:</label>
<input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
</div>
<div className="form-group">
<label>Email:</label>
<input type="email" name="email" value={formData.email} onChange={handleChange} required />
</div>
<div className="form-group">
<label>Mobile Number:</label>
<input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
</div>
<div className="form-group">
<label>Address:</label>
<textarea name="address" value={formData.address} onChange={handleChange} required />
</div>
<div className="form-group">
<label>Pan:</label>
<input type="text" name="Pan" value={formData.Pan} onChange={handleChange} required />
</div>
<div className="form-group">
<label>Password:</label>
<input type="password" name="password" value={formData.password} onChange={handleChange} required />
</div>
<div className="form-group">
<label>Confirm Password:</label>
<input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
</div>
<button style={{backgroundColor:'green'}} type="submit">Register</button>
</form>
<p>Already have an account? <a onClick={()=>{
    login();
}}style={{color:'yellowgreen'}}>Back to Login</a></p>
</div>
</div>
);
};

export default RegistrationForm;
