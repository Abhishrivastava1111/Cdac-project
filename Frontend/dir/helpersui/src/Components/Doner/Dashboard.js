import { useEffect, useState } from 'react';
import 'C:/Users/DELL/OneDrive/Desktop/New folder/Cdac-project/Frontend/dir/helpersui/node_modules/bootstrap/dist/css/bootstrap.css';
import '../common.css';

function Dashboard()
{
   
   
  
    return (
//        <div>
//     <div className='container'>
//     <div className='myDivStyle'>
//         <hr></hr>
//         <center>
//             <h3 className="quote-header">Quote - <span className="quote">give respect take respect</span></h3>
//         </center>
//         <hr></hr>
//     </div>
//     <div className='table-responsive'>
//         <div className="left-links">
//             <a href="show Profile" className="black-link">
//                 <h3>Show Profile</h3>
//             </a>
//             <a href="Edit Profile" className="black-link">
//                 <h3>Edit Profile</h3>
//             </a>
//             <a href="Logout" className="black-link">
//                 <h3>Logout</h3>
//             </a>
//         </div>
//         <br></br>
//     </div>
//     <div className="button-container">
//         <button type="button" className="bottom-button">
//             Donate
//         </button>
//         <div className="button-space"></div> 
//         <button type="button" className="bottom-button">
//             View Campaign
//         </button>
//     </div>
// </div>
// </div>
    
<table>
            <tr>
                <td height={950}>
                    <aside className='floatleftdonS'>
                        <h2><a href="https://www.w3schools.com" style={{ color: 'black' }} >Adding Helper</a></h2>
                        <h2><a href="https://www.w3schools.com" style={{ color: 'black' }}>Register for a campaign </a></h2>
                    </aside>
                </td>
                <td width={1500}>
                <center>
             <h1 >Quote - give respect take respect</h1>
        </center>
                </td>
                <td height={950}>
                    <aside className='floatrightdonS'>
                        <h2><a href="https://www.w3schools.com" style={{ color: 'black' }}>Show Profile</a></h2>
                        <h2><a href="https://www.w3schools.com" style={{ color: 'black' }} >Edit Profile</a></h2>
                        <h2><a href="https://www.w3schools.com" style={{ color: 'black' }} >Logout</a></h2>
                    </aside>
                </td>
            </tr>
        </table>
        )
}
 
export default Dashboard;