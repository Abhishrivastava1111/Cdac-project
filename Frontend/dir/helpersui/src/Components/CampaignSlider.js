import React, { useState } from 'react';
import '../common.css';
import { Carousel } from 'react-bootstrap';

const campaignData = [
    { id: 1, title: 'Campaign 1', type: 'Healthcare', description: 'Help us raise funds for medical treatment.', requiredAmount: 5000, collectedAmount: 3000, endDate: '2023-09-30', image: 'campaign1.jpg' },
    { id: 2, title: 'Campaign 2', type: 'Education', description: 'Help us raise funds for education.', requiredAmount: 8000, collectedAmount: 6000, endDate: '2023-10-15', image: 'campaign2.jpg' },
    { id: 3, title: 'Campaign 1', type: 'Healthcare', description: 'Help us raise funds for medical treatment.', requiredAmount: 5000, collectedAmount: 3000, endDate: '2023-09-30', image: 'campaign1.jpg' },
    { id: 4, title: 'Campaign 2', type: 'Education', description: 'Help us raise funds for education.', requiredAmount: 8000, collectedAmount: 6000, endDate: '2023-10-15', image: 'campaign2.jpg' },
    { id: 5, title: 'Campaign 2', type: 'Education', description: 'Help us raise funds for education.', requiredAmount: 8000, collectedAmount: 6000, endDate: '2023-10-15', image: 'campaign2.jpg' },
    
    // Add more campaign data here
];
    
const CampaignSlider = () => {
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 5;

    const handleNext = () => {
        setStartIndex(prevIndex => prevIndex + itemsPerPage);
    };

    const handlePrevious = () => {
        setStartIndex(prevIndex => Math.max(prevIndex - itemsPerPage, 0));
    };

    return (
        <div className="campaign-slider">
            <h2>Featured Campaigns</h2>
            <Carousel interval={null}>
                {[...Array(Math.ceil(campaignData.length / itemsPerPage))].map((_, index) => {
                    const campaigns = campaignData.slice(index * itemsPerPage, (index + 1) * itemsPerPage);
                    return (
                        <Carousel.Item key={index}>
                            <div className="campaign-grid">
                                {campaigns.map(campaign => (
                                    <div key={campaign.id} className="campaign-item">
                                        <img src={campaign.image} alt={campaign.title} />
                                        <h3>{campaign.title}</h3>
                                        <p>Type: {campaign.type}</p>
                                        <p>{campaign.description}</p>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: `${(campaign.collectedAmount / campaign.requiredAmount) * 100}%` }}></div>
                                        </div>
                                        <p>Required Amount: ${campaign.requiredAmount}</p>
                                        <p>Collected Amount: ${campaign.collectedAmount}</p>
                                        <p>End Date: {campaign.endDate}</p>
                                        <button className="btn btn-success">Donate</button>
                                    </div>
                                ))}
                            </div>
                            {index === Math.ceil(campaignData.length / itemsPerPage) - 1 && (
                               <div className="carousel-buttons">
                               <button className="btn btn-primary btn-small btn-prev" onClick={handlePrevious} disabled={startIndex === 0}>Previous</button>
                               <button className="btn btn-primary btn-small btn-next" onClick={handleNext} disabled={startIndex + itemsPerPage >= campaignData.length}>Next</button>
                           </div>
                            )}
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default CampaignSlider;