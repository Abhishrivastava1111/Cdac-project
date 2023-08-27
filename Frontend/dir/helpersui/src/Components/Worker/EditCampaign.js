import React, { useState } from 'react';
import axios from 'axios';
import './editCampaign.css';

const EditCampaign = ({ campaign, onClose, onUpdate }) => {
    const [editedCampaign, setEditedCampaign] = useState({ ...campaign });
    const [updateSuccess, setUpdateSuccess] = useState(false); 

    const handleCloseWithMessage = () => {
        onUpdate(editedCampaign);
        setUpdateSuccess(true);
        setTimeout(() => {
          onClose();
        }, 1500); // Close the window after 1.5 seconds
      };
  const handleFieldChange = (field, value) => {
    setEditedCampaign(prevState => ({ ...prevState, [field]: value }));
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:57380/campaigns/editCampaign/${editedCampaign.campaign_id}`, editedCampaign)
      .then(response => {
        if (response.status === 200) {
          onUpdate(editedCampaign);
          onClose();
        }
      })
      .catch(error => {
        console.error('Error updating campaign:', error);
      });
  };

  return (
    <div className="edit-campaign">
      <h2>Edit Campaign</h2>
      <div className="edit-form">
      <label>Title:</label>
        <input type="text" value={editedCampaign.title} onChange={e => handleFieldChange('title', e.target.value)} />
        
        <label>Type:</label>
        <input type="text" value={editedCampaign.type} onChange={e => handleFieldChange('type', e.target.value)} />

        <label>Goal:</label>
        <input type="text" value={editedCampaign.goal} onChange={e => handleFieldChange('goal', e.target.value)} />

        <label>Description:</label>
        <input type="text" value={editedCampaign.description} onChange={e => handleFieldChange('description', e.target.value)} />
        <label>End Date:</label>
        <input type="text" value={editedCampaign.end_date} onChange={e => handleFieldChange('end_date', e.target.value)} />
        <label>Image Location:</label>
        <input type="text" value={editedCampaign.imageloc} onChange={e => handleFieldChange('imageloc', e.target.value)} />
        <label>Required Amount:</label>
        <input type="text" value={editedCampaign.requiredAmount} onChange={e => handleFieldChange('requiredAmount', e.target.value)} />
        <button className="update-button" onClick={handleUpdate}>Update</button>
        <button className="cancel-button" onClick={onClose}>Cancel</button>
        {updateSuccess && <p className="success-message">Campaign updated successfully.</p>}
      </div>
    </div>
  );
};

export default EditCampaign;