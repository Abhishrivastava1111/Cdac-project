import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CampaignTable.css';
import EditCampaign from './EditCampaign';

const CampaignTable = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [editingCampaign, setEditingCampaign] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:57380/campaign')
      .then(response => {
        setCampaigns(response.data);
      })
      .catch(error => {
        console.error('Error fetching campaign data:', error);
      });
  }, []);

  const handleEdit = campaign => {
    setEditingCampaign(campaign);
  };

  const handleUpdateCampaign = updatedCampaign => {
    setCampaigns(prevCampaigns =>
      prevCampaigns.map(campaign =>
        campaign.campaign_id === updatedCampaign.campaign_id ? updatedCampaign : campaign
      )
    );
    setEditingCampaign(null);
  };

  const handleEditClose = () => {
    setEditingCampaign(null);
  };

  const handleDelete = campaignId => {
    axios.delete(`http://localhost:57380/campaign/${campaignId}`)
      .then(response => {
        if (response.status === 200) {
          setCampaigns(prevCampaigns =>
            prevCampaigns.filter(campaign => campaign.campaign_id !== campaignId)
          );
        }
      })
      .catch(error => {
        console.error('Error deleting campaign:', error);
      });
  };

  return (
    <div className="campaign-table">
      <h2>Campaign Details</h2>
      <table>
        <thead>
          <tr>
           <th>Campaign ID</th>
            <th>Title</th>
            <th>Type</th>
            <th>Goal</th>
            <th>Description</th>
            <th>End Date</th>
            <th>Image Location</th>
            <th>Required Amount</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
          {campaigns.map(campaign => (
            <tr key={campaign.campaign_id}>
              <td>{campaign.campaign_id}</td>
              <td>{campaign.title}</td>
               <td>{campaign.type}</td>
              <td>{campaign.goal}</td>
              <td>{campaign.description}</td>
              <td>{campaign.end_date}</td>
              <td>{campaign.imageloc}</td>
              <td>{campaign.requiredAmount}</td>
              <td>
                <button className="edit-button" onClick={() => handleEdit(campaign)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(campaign.campaign_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingCampaign && (
        <EditCampaign
          campaign={editingCampaign}
          onClose={handleEditClose}
          onUpdate={handleUpdateCampaign}
        />
      )}
    </div>
  );
}

export default CampaignTable;