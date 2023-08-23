import React, { useState } from 'react';
import './common.css';
import Layout from './Layout';

const AddEmployeeForm = () => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        mobile: '',
        email: '',
        address: '',
        pan: '',
        accountNo: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform the submission logic here, e.g., sending data to a server
        console.log('Form submitted:', formData);
    };

    return (
        <Layout>
        <div className="add-employee-form">
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <label>ID:</label>
                <input type="text" name="id" value={formData.id} onChange={handleChange} />

                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />

                <label>Mobile:</label>
                <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />

                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />

                <label>Address:</label>
                <textarea name="address" value={formData.address} onChange={handleChange}></textarea>

                <label>PAN:</label>
                <input type="text" name="pan" value={formData.pan} onChange={handleChange} />

                <label>Account No:</label>
                <input type="text" name="accountNo" value={formData.accountNo} onChange={handleChange} />

                <div className="buttons">
                    <button type="submit" className="btn btn-success">Register</button>
                    <button type="button" className="btn btn-success">Back</button>
                </div>
            </form>
        </div>
        </Layout>
    );
};

export default AddEmployeeForm;
