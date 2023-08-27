import axios from "axios";
import React, { useEffect, useState } from "react";
import user1 from "../image/user_456212.png"

function Profile() {
  const [userData, setUserData] = useState({
    user_id: 0,
    name: "",
    email: "",
    mobile: "",
    address: "",
    password: "",
    pan: ""
  });

  useEffect(() => {
    axios.get("http://localhost:57380/user/GetOneById/1")
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleEditProfile = () => {
    axios.put("http://localhost:57380/user/Update", userData)
      .then(resp => {
        console.log("Profile Updated:", resp.data);
        sessionStorage.setItem("userdet", JSON.stringify(resp.data));
      })
      .catch(error => {
        console.log("Error updating profile:", error);
      });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData(prevUserData => ({
      ...prevUserData,
      [id]: value,
    }));
  };

  return (
    <>
      <form
        style={{
          width: "50%",
          left: "450px",
          position: "relative",
          boxShadow: "10px 10px 10px 5px grey",
          padding: "20px",
          marginTop: "50px",
        }}
      >
        <center>
          <img src={user1} alt="hello" width="100" height="100" />
          <hr />
          <h3>ProfilePage</h3>
        </center>
        <div className="form-group">
          <label htmlFor="id">Id</label>
          <input
            type="number"
            readOnly
            className="form-control"
            id="user_id"
            value={userData.user_id}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={userData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={userData.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="text"
            className="form-control"
            id="mobile"
            value={userData.mobile}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pan">PAN</label>
          <input
            type="text"
            className="form-control"
            id="pan"
            value={userData.pan}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="form-control"
            id="password"
            value={userData.password}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="button"
          onClick={handleEditProfile}
          className="bottom-button1shubhu"
        >
          Update Profile
        </button>
      </form>
    </>
  );
}

export default Profile;
