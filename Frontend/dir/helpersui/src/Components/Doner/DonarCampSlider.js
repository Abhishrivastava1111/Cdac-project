import React, { useState, useEffect } from 'react';
import '../CampaignSlider.css';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import DonarLayout from './DonarLayout';


const itemsPerPage = 4; // Number of campaigns per slide

const DonarCampaignSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [campaign, setCampaign] = useState([]);
  const history = useHistory();
const donate=(x)=>{
  debugger;
  history.push({
    pathname: '/donate',
    state: { x }
  });
}

  useEffect(() => {
    axios
      .get('http://localhost:57380/campaign')
      .then((res) => {
        debugger
        const persons = res.data;
        setCampaign(persons);
      })
      .catch((error) => {
        console.error('Error fetching campaign data:', error);
      });
  }, []);

  return (
    <DonarLayout>
    <div className="campaign-slider">
      <h2>Featured Campaigns</h2>
      <Carousel interval={null} indicators={false} activeIndex={startIndex}>
        {[...Array(Math.ceil(campaign.length / itemsPerPage))].map((_, index) => {
          const campaignSubset = campaign.slice(index * itemsPerPage, (index + 1) * itemsPerPage);
          return (
            <Carousel.Item key={index}>
              <div className="campaign-grid">
                {campaignSubset.map((campaignxx) => (
                  <div key={campaignxx.campaign_id} className="campaign-item">
                    <img src={campaignxx.imageloc} alt={campaignxx.title} />
                    <h3>{campaignxx.title}</h3>
                    <p>Type: {campaignxx.type}</p>
                    <p>{campaignxx.description}</p>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: `${(campaignxx.collectedAmount / campaignxx.requiredAmount) * 100}%` }}></div>
                    </div>
                    <p>Required Amount: Rs {campaignxx.requiredAmount}</p>
                    <p>Collected Amount: Rs {campaignxx.collectedAmount}</p>
                    <p>End Date: {campaignxx.end_date}</p>
                    <button className="btn btn-success" onClick={()=>{donate(campaignxx.campaign_id)}}>Donate</button>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div className="carousel-arrows">
        <button className="carousel-arrow prev-arrow" onClick={() => setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0))} disabled={startIndex === 0}></button>
        <button className="carousel-arrow next-arrow" onClick={() => setStartIndex((prevIndex) => Math.min(prevIndex + 1, Math.ceil(campaign.length / itemsPerPage) - 1))} disabled={startIndex + itemsPerPage >= campaign.length}></button>
      </div>
    </div>
    </DonarLayout> );
};

export default DonarCampaignSlider;