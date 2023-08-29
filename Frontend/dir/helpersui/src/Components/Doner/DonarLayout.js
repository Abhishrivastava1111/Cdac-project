import React from 'react';
import '../Worker/Layout.css'; 
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const DonarLayout = ({ children }) => {
    const history = useHistory()
    const Linked=(argm)=>{
        history.push(argm)
    }
    return (
        <div className="layout">
            <div className="left-column">
                <nav className="nav">
                    <ul>
                        <li><p onClick={()=>{Linked("/UpiAppsPage")}}>Donate Anonymously</p></li>
                     
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
                       
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default DonarLayout;