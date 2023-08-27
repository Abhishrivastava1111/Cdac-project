import React, { useState } from 'react';
import './Donate.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';

const Donate = () => {
  const location = useLocation();
  const history = useHistory()
  const [vision, setVision] = useState('');
  const [donationAmount, setDonationAmount] = useState('');

  const UserCredentials = JSON.parse(sessionStorage.getItem('credential'));
  const currentDate = format(new Date(), 'yyyy-MM-dd');

  const handleDonate = async (event) => {
    event.preventDefault();
    debugger
    const donationData = {
        
      campaign_id: location.state.x, 
      user_id: UserCredentials.user_id,
      vision: vision,
      contribution1: donationAmount,
      date: currentDate,
    };

    try {
      const response = await axios.post('http://localhost:57380/contributions/NewContro', donationData);
      history.push('/UpiAppsPage')
      console.log('Donation successful:', response.data);
    } catch (error) {
      console.error('Error making donation:', error);
    }
  };

  return (
    <form className="donate-form" onSubmit={handleDonate}>
      <h2>Donate for a Good Cause</h2>
      <div className="donate-field">
        <label htmlFor="vision">Vision:</label>
        <textarea
          id="vision"
          name="vision"
          rows="4"
          value={vision}
          onChange={(e) => setVision(e.target.value)}
          placeholder="Enter your Good vision here"
        ></textarea>
      </div>
      <div className="donate-field">
        <label htmlFor="donationAmount">Donation Amount:</label>
        <input
          type="number"
          id="donationAmount"
          name="donationAmount"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
        />
      </div>
      <div className="donate-field">
        <label htmlFor="date">Date:</label>
        <input type="text" id="date" name="date" value={currentDate} readOnly />
      </div>

      <input type="hidden" name="campaignId" value={location.state} />
      <input type="hidden" name="userId" value={UserCredentials.user_id} />

      <button className="donate-button" type="submit">
        Donate Here
      </button>
    </form>
  );
};

export default Donate;
