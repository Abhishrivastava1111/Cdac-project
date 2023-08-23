import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './common.css';

//function HighLevelReport()
//{
   
   
  
//    return (
       
        
        // <div className='table-responsive'>
        // <hr></hr>
        //     <center><h1><b>Donar HighLevelReport</b></h1></center>
        //     <hr></hr>
        //     <center>
        //         <table className='campaign-table'>
        //             <thead>
        //                 <tr>
        //                     <th>Sr.No</th>
        //                     <th>Donar Name</th>
        //                     <th>Total Fund</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 <tr>
        //                     <td>1</td>
        //                     <td>shubhu</td>
        //                     <td>50000000</td>
                            
        //                 </tr>
        //             </tbody>
        //         </table>
                
        //     </center>
          
        // </div>
      //  import React from 'react';
//import './yourStyles.css'; // Import your custom styles here

const DonorHighLevelReport = () => {
  const data = [
    { id: 1, name: 'shubhu', totalFund: 50000000 },
    {id:2,name:'lokesh',totalFund:10000}
    // Add more donor data as needed
  ];

  // Calculate the total sum of the "Total Fund" column
  const totalSum = data.reduce((sum, donor) => sum + donor.totalFund, 0);

  // Sort the data array based on the "Total Fund" column in ascending order
  const sortedData = [...data].sort((a, b) => a.totalFund - b.totalFund);

  return (
    <div className='table-responsive'>
      <hr />
      <center>
        <h1><b>Donar High Level Report</b></h1>
      </center>
      <hr />
      <center>
        <table className='campaign-table'>
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Donar Name</th>
              <th>Total Fund</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((donor, index) => (
              <tr key={donor.id}>
                <td>{index + 1}</td>
                <td>{donor.name}</td>
                <td>{donor.totalFund}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="2"><b>Total</b></td>
              <td><b>{totalSum}</b></td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
};

//export default DonorHighLevelReport;


    
    
    
        //)
//}
 
export default DonorHighLevelReport;