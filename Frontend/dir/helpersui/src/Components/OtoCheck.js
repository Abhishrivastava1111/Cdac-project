import React, { useState } from 'react';
import './Otp.css';
import { useHistory } from 'react-router-dom';
import Donarprofile from './Doner/Donarprofile';
import { useAuth } from './Auth'; // Assuming useAuth is exported directly from Auth.js

const OTPVerificationComponent = (prop) => {
  const [otp, setOTP] = useState('');
  const history = useHistory();

  const { isLoggedIn, setIsLoggedIn } = useAuth(); 

  const [verificationResult, setVerificationResult] = useState('');

  const handleOTPChange = (event) => {
    setOTP(event.target.value);
  };

  const handleVerificationSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:57380/Login/CheckOtp/${otp}`, {
        method: 'GET', // Correct method name
        headers: {
          'Content-Type': 'application/json',
        },
      });
      debugger
      const data = await response.json();
      if (data.status === 200) {
        
        setIsLoggedIn(true);
        console.log(prop.location.state.cred.role_id);
        const forsetup =JSON.stringify(prop.location.state.cred)
        if(prop.location.state.cred.role_id==3){
          window.sessionStorage.setItem("credential",forsetup)
          history.push({
            pathname:'/DonarLayout',
            state:{isLoggedIn:true}
          })
        }
       else if(prop.location.state.cred.role_id==2){
        window.sessionStorage.setItem("credential",forsetup)
        history.push({

          pathname: '/Layout',
          state: { isLoggedIn: true }
        });
      }
      else{
        history.push({

          pathname: '/',
          state: { isLoggedIn: true }
        });
      }

        
      }
    } catch (error) {
      console.error('Failed to verify', error);
    }
  };

  return (
    
    <div className="otp-verification-container"style={{marginTop:'210px', marginBottom:'200px'}}>
      <h2>OTP Verification</h2>
      <input
        type="text"
        value={otp}
        onChange={handleOTPChange}
        placeholder="Enter OTP"
        className="otp-input"
      />
      <button onClick={handleVerificationSubmit} className="submit-button">
        Submit
      </button>
      {verificationResult && (
        <div className="verification-result">
          <p>Verification Result: {verificationResult}</p>
        </div>
      )}
    </div>
  );
};

export default OTPVerificationComponent;
