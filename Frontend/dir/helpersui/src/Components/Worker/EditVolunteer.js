import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditVolunteer.css'; 
import { useHistory } from 'react-router-dom';
import Layout from './Layout';


const EditVolunteer = (props) => {
  const [volunteer, setVolunteer] = useState({});
  const [editedName, setEditedName] = useState('');
  const [editedAddress, setEditedAddress] = useState('');
  const [editedMobile, setEditedMobile] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetchVolunteer();
  }, []);

  const fetchVolunteer = () => {
    axios.get(`http://localhost:57380/user/GetOneById/${props.location.state.value}`)
      .then(response => {
        const data = response.data;
        setVolunteer(data);
        setEditedName(data.name);
        setEditedAddress(data.address);
        setEditedMobile(data.mobile);
        setEditedEmail(data.email);
      })
      .catch(error => {
        console.error('Error fetching volunteer:', error);
      });
  };

  const handleUpdate = () => {
    const updatedVolunteer = {
      name: editedName,
      address: editedAddress,
      mobile: editedMobile,
      email: editedEmail,
    };

    axios.put(`http://localhost:57380/user/Update/${props.location.state.value}`, updatedVolunteer)
      .then(response => {
        console.log('Volunteer updated successfully:', response.data);
        history.push('/VolunteerList'); // Redirect to the list page after successful update
      })
      .catch(error => {
        console.error('Error updating volunteer:', error);
      });
  };

  const handleCancel = () => {
    setIsEditing(false);

    setEditedName(volunteer.name);
    setEditedAddress(volunteer.address);
    setEditedMobile(volunteer.mobile);
    setEditedEmail(volunteer.email);
  };

  const handleSubmit = (e) => {
    debugger
    e.preventDefault();
    handleUpdate();
  };

  return (
    <Layout>
    <div className="edit-volunteer">
      <h2>Edit Volunteer</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                ) : (
                  <span>{volunteer.name}</span>
                )}
              </td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedAddress}
                    onChange={(e) => setEditedAddress(e.target.value)}
                  />
                ) : (
                  <span>{volunteer.address}</span>
                )}
              </td>
            </tr>
            <tr>
              <td>Mobile:</td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedMobile}
                    onChange={(e) => setEditedMobile(e.target.value)}
                  />
                ) : (
                  <span>{volunteer.mobile}</span>
                )}
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedEmail}
                    onChange={(e) => setEditedEmail(e.target.value)}
                  />
                ) : (
                  <span>{volunteer.email}</span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="button-container">
          {isEditing ? (
            <>
              <button className="update-button" type="submit">Update</button>
              <button className="cancel-button" onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <button className="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
          )}
        </div>
      </form>
    </div>
    </Layout>
  );
};

export default EditVolunteer;
