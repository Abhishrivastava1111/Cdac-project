import 'C:/Users/DELL/OneDrive/Desktop/New folder/Cdac-project/Frontend/dir/helpersui/node_modules/bootstrap/dist/css/bootstrap.css';
import '../common.css';
import { useAuth } from '../Auth';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

function  Viewcampaign() {
    const { setIsLoggedIn } = useAuth();
    const history = useHistory();
    setIsLoggedIn(false)
    useEffect(()=>{
        
        console.log(setIsLoggedIn+ "adfsa")
    },[setIsLoggedIn])
 return (<table>
            <tr>
                <td height={950}>
                    <aside className='floatleft'>
                        <h2><a href="https://www.w3schools.com" style={{ color: 'black' }} >Adding Helper</a></h2>
                        <h2><a href="https://www.w3schools.com" style={{ color: 'black' }}>Register for a campaign </a></h2>
                    </aside>
                </td>
                <td width={1500}>
              <center><h1><b>View campaign</b></h1></center>
                </td>
                <td height={950}>
                    <aside className='floatright'>
                        <h2><a href="https://www.w3schools.com" style={{ color: 'black' }}>Show Profile</a></h2>
                        <h2><a href="https://www.w3schools.com" style={{ color: 'black' }} >Edit Profile</a></h2>
                        <h2><a href="https://www.w3schools.com" style={{ color: 'black' }} >Logout</a></h2>
                    </aside>
                </td>
            </tr>
        </table>





















    )
}

export default Viewcampaign;