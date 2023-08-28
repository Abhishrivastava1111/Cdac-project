import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './volunteerList.css'; 
import { Link } from 'react-router-dom'; 
import Layout from './Layout';
const VolunteerList = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetchVolunteers();
  }, []);

  const fetchVolunteers = () => {
    axios.get('http://localhost:57380/User')
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
            <th>Password</th>
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
              <td>{volunteer.password}</td>
              <td>{volunteer.pan}</td>
              <td>
                <Link to={`/updateprofile`} className="edit-button">Edit</Link>
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