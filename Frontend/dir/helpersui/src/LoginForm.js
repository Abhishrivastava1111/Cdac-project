import React, { useState } from 'react';
import './common.css'; 

const LoginForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset the form after submission if needed
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div className="login-form">
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
      <p><a href="#">New to Helpers Planet?</a></p>
    </div>
  );
};

export default LoginForm;