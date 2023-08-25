import 'C:/Users/DELL/OneDrive/Desktop/New folder/Cdac-project/Frontend/dir/helpersui/node_modules/bootstrap/dist/css/bootstrap.css';
import '../common.css';


function Dashboard()
{
   
   
  
    return (
       
        
        <div className='table-responsiveshubhu'>
        <hr></hr>
            <center><h1><b>Running Campaigns</b></h1></center>
            <hr></hr>
            <center>
                <table className='campaign-table'>
                    <thead>
                        <tr>
                            <th>Campaign Title</th>
                            <th>Aim</th>
                            <th>End Date</th>
                            <th>Location</th>
                            <th>Total Fund</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Campaign 1</td>
                            <td>Aim 1</td>
                            <td>2023-08-31</td>
                            <td>Location 1</td>
                            <td>$1000</td>
                        </tr>
                    </tbody>
                </table>
                
            </center>
            <center><h3><a href="https://www.w3schools.com">DONATE</a></h3></center>
            <center><h3><a href="https://www.w3schools.com">Back</a></h3></center>
        </div>

    
    
    
        )
}
 
export default Dashboard;