import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './volunteerList.css'; 

import Layout from './Layout';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
const VolunteerList = () => {
  const [volunteers, setVolunteers] = useState([]);
  const history = useHistory()
  useEffect(() => {
    fetchVolunteers();
  }, []);

  const handleEdit=(x)=>{
    history.push({
        pathname: '/EditVolunteer',
        state: { value: x  }
      });
  }



  const fetchVolunteers = () => {
    axios.get('http://localhost:57380/user/GetAll')
      .then(response => {
        setVolunteers(response.data);
      })
      .catch(error => {
        console.error('Error fetching volunteers:', error);
      });
  };

 

  const handleRemove = (user_id) => {
    console.log('Remove clicked for volunteer ID:', user_id);
    
    axios.delete(`http://localhost:57380/User/${user_id}`)
      .then(response => {
        console.log('Volunteer removed successfully:', response.data);
       
        fetchVolunteers();
      })
      .catch(error => {
        console.error('Error removing volunteer:', error);
      });
  };

  return (
    <Layout>
    
    <div className="volunteer-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Mobile</th>
            <th>Email</th>
             <th>PAN</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {volunteers.map((volunteer) => (
            <tr key={volunteer.user_id}>
              <td>{volunteer.name}</td>
              <td>{volunteer.address}</td>
              <td>{volunteer.mobile}</td>
              <td>{volunteer.email}</td>
              <td>{volunteer.pan}</td>
              <td>
              <button className="edit-button" onClick={() => handleEdit(volunteer.user_id)}>Edit</button>
                <button className="remove-button" onClick={() => handleRemove(volunteer.user_id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
     </Layout>);
};

export default VolunteerList;