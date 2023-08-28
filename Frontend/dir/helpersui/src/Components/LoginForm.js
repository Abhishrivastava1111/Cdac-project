import React, { useState } from 'react';
import './common.css'; 
import axios from 'axios';
import { useAuth } from './Auth';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';



const LoginForm = () => {
  const history = useHistory()
  const { setIsLoggedIn } = useAuth();
  const [isValid, setIsValid] = useState(false)
  

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const Register=()=>{
    history.push('register')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const credentials = { 
      email: formData.email, 
      password: formData.password,
      
    };

    // Send POST request
    axios.post('http://localhost:57380/Login/userLogin', credentials)
      .then(response => {
        // Handle success
        debugger
        const loginCredentials = JSON.stringify(response.data)
        console.log('Login successful:', response.data);
        if(response.data.status==200){
          history.push({
            pathname: '/OTPVerificationComponent',
            state: { cred: response.data  }
          });
        }
        

       
      

        
      })
      .catch(error => {
        // Handle error
        console.error('Login failed:', error.response.data);
      });

    // Reset the form after submission
   const setFormData =()=>({
      email: '',
      password: '',
    });
  }
  return (
    <div className="login-form" style={{marginTop: '150px',marginBottom: '100px'}}>
      <center><h2>Login</h2></center>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>   
        <p><a href="#">Forgot your password?</a></p>
         <button className="login-button" type="submit">Login</button>
      </form>
      <p style={{color:'green'}}  onClick={()=>{Register()}}>New to Helpers Planet?</p>
    </div>
  );
};

export default LoginForm;