import React from 'react';
import './common.css'; 

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <div className="left-column">
                <nav className="nav">
                    <ul>
                        <li><a href="#">High level report</a></li>
                        <li><a href="#">View Employee</a></li>
                        <li><a href="#">Start Campaign</a></li>
                        <li><a href="#">View Campaign</a></li>
                    </ul>
                </nav>
            </div>
            <div className="main-content">
                {children}
            </div>
            <div className="right-column">
                <nav className="nav">
                    <ul>
                        <li><a href="#">Show Profile</a></li>
                        <li><a href="#">Edit Profile</a></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Layout;
