import React from 'react';
import './Layout.css'; 
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const Layout = ({ children }) => {
    const history = useHistory()
    const Linked=(argm)=>{
        history.push(argm)
    }
    return (
        <div className="layout">
            <div className="left-column">
                <nav className="nav">
                    <ul>
                        <li><p onClick={()=>{Linked("/AddingHelpervolunter")}}>Add Volunteer</p></li>
                        <li><p onClick={()=>{Linked("/VolunteerList")}}>View Volunteer</p></li>
                        <li><p onClick={()=>{Linked("/StartCampaign")}}>Start Campaign</p></li>
                        <li><p onClick={()=>{Linked("/CampaignTable")}}>View Campaign</p></li>
                    </ul>
                </nav>
            </div>
            <div className="main-content">
                {children}
            </div>
            <div className="right-column">
                <nav className="nav">
                    <ul>
                        <li><p onClick={()=>{Linked("/")}}>Show Profile</p></li>
                        <li><p onClick={()=>{}}>Edit Profile</p></li>
                        <li><p onClick={()=>{}}>Logout</p></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Layout;