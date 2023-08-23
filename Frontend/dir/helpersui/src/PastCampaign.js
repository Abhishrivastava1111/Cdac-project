import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './common.css'; 
import Layout from './Layout';

const campaignsData = [
    { id: 1, title: 'Campaign 1', startDate: '2023-08-01', endDate: '2023-08-10' },
    { id: 2, title: 'Campaign 2', startDate: '2023-08-15', endDate: '2023-08-25' },
  
];

const PastCampaigns = () => {
    return (
        <Layout>
        <div className="container mt-5 text-center"> {/* Add 'text-center' class */}
            <h2>Past Campaigns</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {campaignsData.map(campaign => (
                        <tr key={campaign.id}>
                            <td>{campaign.id}</td>
                            <td>{campaign.title}</td>
                            <td>{campaign.startDate}</td>
                            <td>{campaign.endDate}</td>
                            <td>
                                <button className="btn btn-primary">View</button>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </Layout>
    );
};

export default PastCampaigns;
