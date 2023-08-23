
import React, { useState } from 'react';
import './common.css'; 
import Layout from './Layout';
const StartCampaignForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        type: '',
        description: '',
        goal: '',
        startDate: '',
        endDate: '',
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
        <div className="start-campaign-form">
            <h2>Start Campaign</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} />

                <label>Type:</label>
                <input type="text" name="type" value={formData.type} onChange={handleChange} />

                <label>Description:</label>
                <textarea name="description" value={formData.description} onChange={handleChange}></textarea>

                <label>Goal:</label>
                <input type="text" name="goal" value={formData.goal} onChange={handleChange} />

                <label>Start Date:</label>
                <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />

                <label>End Date:</label>
                <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />

                <button type="submit" className="btn btn-success">Start</button>
            </form>
        </div>
        </Layout>
    );
};

export default StartCampaignForm;
