import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './common.css';

function AddingHelpervolunter() {



    return (

        <table>
            <tr>
                <td height={950}>
                    <aside className='floatleft'>
                        <h2><a href="https://www.w3schools.com" style={{ color: 'black' }} >Adding Helper</a></h2>
                        <h2><a href="https://www.w3schools.com" style={{ color: 'black' }}>Register for a campaign </a></h2>
                    </aside>
                </td>
                <td width={1500}>
                    <div className='input-container'>
                        <center><h1><b>Adding Helper</b></h1></center>
                        <label>Name</label>
                        <input type="text" className="input-field" placeholder="Name" />
                        <br></br>
                        <label>Address</label>
                        <input type="text" className="input-field" placeholder="Address" />
                        <br></br>
                        <label>Email</label>
                        <input type="text" className="input-field" placeholder="Add Vision" />
                        <br></br>
                        <label>Matter</label>
                        <input type="text" className="input-field" placeholder="Add Vision" />
                        <br></br>
                        <label>PAN</label>
                        <input type="text" className="input-field" placeholder="Add Vision" />
                        <br></br>
                        <label>Password</label>
                        <input type="text" className="input-field" placeholder="Add Vision" />
                        <br></br>
                        <label>Need</label>
                        <input type="text" className="input-field" placeholder="Add Vision" />
                        <br></br>
                    </div>
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

export default AddingHelpervolunter;