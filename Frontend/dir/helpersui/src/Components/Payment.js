import React, { useState } from "react";
import "./UpiAppsPage.css";
import PhonePeLogo from "./image/user_456212.png";
import PaytmLogo from "./image/user_456212.png";
import GooglePayLogo from "./image/user_456212.png";

import Google from "./image/Google.jpeg";
import Paytm from "./image/paytm.jpeg";
import Phone from "./image/Phone.jpeg";



const UpiAppsPage = () => {
  const [showBankDetails, setShowBankDetails] = useState(false);
  const[ShowQrCodeG, setShowQrCodeG] = useState(false);
  const[ShowQrCodeP, setShowQrCodeP] = useState(false);
  const[ShowQrCodePtm, setShowQrCodePtm] = useState(false);
 

  const doREnder=(x)=>{
    switch (x) {
        case 1:
         setShowQrCodeG(!ShowQrCodeG)
            break;
        case 2:
            setShowQrCodeP(!ShowQrCodeP)
            break;
        case 3:
            setShowQrCodePtm(!ShowQrCodePtm)
            break;
    }
  }
  return (
    <div className="upi-apps-page">
      <h1>Choose Your Payment Option</h1>
      <div className="upi-apps-list">
        <div className="upi-app">
          <img onClick={()=>{doREnder(1)}} src={ShowQrCodeG?GooglePayLogo:Google} alt="PhonePe" className="app-logo" />
        </div>
        <div className="upi-app">
          <img onClick={()=>{doREnder(2)}} src={ShowQrCodeP?PaytmLogo:Phone} alt="Paytm" className="app-logo" />
        </div>
        <div className="upi-app">
          <img onClick={()=>{doREnder(3)}} src={ShowQrCodePtm?PhonePeLogo:Paytm} alt="Google Pay" className="app-logo" />
        </div>
      </div>
      <div className="card-option">
        <button onClick={() => setShowBankDetails(!showBankDetails)}>
          {showBankDetails ? "Hide Bank Details" : "Pay to Bank Account"}
        </button>
      </div>
      {showBankDetails && (
        <div className="bank-details">
          <h2>Bank Account Details</h2>
          <h4>Account No - 23412320232312</h4>
          <h4>IFSC code - ICICI234322</h4>
          {/* Bank account form inputs and styling */}
        </div>
      )}
    </div>
  );
};

export default UpiAppsPage;
