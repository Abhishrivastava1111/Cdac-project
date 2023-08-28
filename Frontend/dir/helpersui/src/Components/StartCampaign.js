import React, { useState } from 'react';
import './StartCampaign.css';
import Layout from './Layout';
import storage from '../Firebase';
import axios from "axios";
import Campaign from './CampaignSlider'

import { useHistory } from 'react-router-dom/cjs/react-router-dom';
const StartCampaignForm = () => {
    const [image, setImage] = useState('');
    const [Url, setUrl] = useState('');
    const [formData, setFormData] = useState({
        title: '',
        type: '',
        description: '',
        goal: '',
        startDate: '',
        endDate: '',
        file: '',
    });

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };




    const upload = () => {
        const randomnumber=Math.floor(Math.random()  * (200 - 1 + 1)) + 1;
        if (image == null)
          return;
        storage.ref(`/images/${randomnumber}${image.name}`).put(image)
          .on("state_changed", alert("Success"), alert, () => {
            // Getting Download Link
            storage.ref("images").child(`${randomnumber}${image.name}`).getDownloadURL()
              .then((url) => {
                setUrl(url);
                DoAddProd(url);
              })
          });}
    

    const DoAddProd = (url) => {
        //const nevigate= useHistory();
        const camp = {
            title: formData.title,
            type: formData.type,
            goal: formData.goal,
            description: formData.description,
            start_date: formData.startDate,
            end_date: formData.endDate,
            imageloc: url,
            requiredAmount: formData.requiredAmount, 
        };
    
        axios
            .post("http://localhost:57380/api/campaign", camp)
            .then(async (response) => {
                if(response.data.message=="success")
                await delay(2000); 
                window.location.href = "http://localhost:61042/";
            })
            .catch((error) => {   
                console.log(error);
            });
    };
    

    return (
      <Layout>
        <div className="start-campaign-form">
            <h2>Start Campaign</h2>
            <form >
                <label>Title:</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} />

                <label>Type:</label>
                <input type="text" name="type" value={formData.type} onChange={handleChange} />

                <label>Description:</label>
                <textarea name="description" value={formData.description} onChange={handleChange}></textarea>

                <label>Goal:</label>
                <input type="text" name="goal" value={formData.goal} onChange={handleChange} />
                <label>Required Ammount:</label>
                <input type="number" name="requiredAmount" value={formData.requiredAmount} onChange={handleChange} />
                <label>Start Date:</label>
                <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
                <label>End Date:</label>
                <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
                <label>Image:</label>
                <input type="file"  onChange={(e) => { setImage(e.target.files[0]) }}  />
                <br></br>
                <br></br>

                <button type="button" className="btn btn-success" onClick={upload}>Start</button>
            </form>
        </div>
        </Layout>
    );
};

export default StartCampaignForm;