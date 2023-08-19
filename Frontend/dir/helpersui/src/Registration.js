import React, { useState } from 'react';
import './common.css';

const RegistrationForm = () => {
const [formData, setFormData] = useState({
firstName: '',
lastName: '',
email: '',
mobileNumber: '',
address: '',
pincode: '',
password: '',
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
firstName: '',
lastName: '',
email: '',
mobileNumber: '',
address: '',
pincode: '',
password: '',
confirmPassword: '',
});
};

return (
<div className="registration-form">
<center><h4 bgcolor="green">Welcome To Helpers Planet</h4></center>
<center><p><a href="#">Track Donations</a></p></center>
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
<label>Pincode:</label>
<input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
</div>
<div className="form-group">
<label>Password:</label>
<input type="password" name="password" value={formData.password} onChange={handleChange} required />
</div>
<div className="form-group">
<label>Confirm Password:</label>
<input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
</div>
<button type="submit">Register</button>
</form>
<p>Already have an account? <a href="#">Back to Login</a></p>
</div>
);
};

export default RegistrationForm;
