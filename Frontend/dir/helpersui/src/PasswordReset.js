import React, { useState } from 'react';
import './common.css';

const PasswordResetForm = ({ password, newPassword }) => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
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
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="password-reset-form">
      <h2>Password Reset</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Current Password:</label>
          <input type="password" name="currentPassword" value={formData.currentPassword} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>New Password:</label>
          <input type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Confirm New Password:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        <button type="submit">Reset Password</button>
      </form>
      <p><a href="#">Back to Home</a></p>
    </div>
  );
};

export default PasswordResetForm;
