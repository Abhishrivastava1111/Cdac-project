import { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './common.css';

function Dashboard()
{
   
   
  
    return (
       
    <div className='container'>
    <div className='myDivStyle'>
        <hr></hr>
        <center>
            <h3 className="quote-header">Quote - <span className="quote">give respect take respect</span></h3>
        </center>
        <hr></hr>
    </div>
    <div className='table-responsive'>
        <div className="left-links">
            <a href="show Profile" className="black-link">
                <h3>Show Profile</h3>
            </a>
            <a href="Edit Profile" className="black-link">
                <h3>Edit Profile</h3>
            </a>
            <a href="Logout" className="black-link">
                <h3>Logout</h3>
            </a>
        </div>
        <br></br>
    </div>
    <div className="button-container">
        <button type="button" className="bottom-button">
            Donate
        </button>
        <div className="button-space"></div> 
        <button type="button" className="bottom-button">
            View Campaign
        </button>
    </div>
</div>

    
        )
}
 
export default Dashboard;