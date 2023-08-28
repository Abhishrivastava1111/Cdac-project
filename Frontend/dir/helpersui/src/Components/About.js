// import React from 'react';
import mail from "./image/mail.png"
import call from "./image/call.png"
import loki from "./image/loki.png"
import shubham from "./image/shubham.png"
import vaibhav from "./image/vaibhav.png"
import abhi from "./image/abhi.png"
import React from 'react';
import './About.css'

function ContactUs() {
  return (
    <div className="container">
      <h1 className="title">Contact Us</h1>

      <div className="contact-info">
        

         <div className="contact-card">
          <div className="contact-details">
            <h2><b>Team Leader</b></h2>
            <img src={abhi} alt="Abhi Shrivastava" className="profile-img" />
            <br/>
            <b>Abhi Shrivastava</b>
            <div className="contact-icons">
              <img src={mail} alt="Email" className="icon" />
              <a href="https://mail.google.com">abhishrivastava@gmail.com</a>
              <img src={call} alt="Phone" className="icon" />
              <p>Phone: +918817003763</p>
            </div>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-details">
            <h2><b>Full Stack Developer</b></h2>
            <img src={vaibhav} alt="Vaibhav" className="profile-img" />
            <br/>
            <b>Vaibhav kale</b>
            <div className="contact-icons">
              <img src={mail} alt="Email" className="icon" />
              <a href="https://mail.google.com">abhishrivastava@gmail.com</a>
              <img src={call} alt="Phone" className="icon" />
              <p>Phone: +918817003763</p>
            </div>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-details">
            <h2><b>Full Stack Developer</b></h2>
            <img src={shubham} alt="Abhi Shrivastava" className="profile-img" />
            <br/>
            <b>Shubham Gujar</b>
            <div className="contact-icons">
              <img src={mail} alt="Email" className="icon" />
              <a href="https://mail.google.com">abhishrivastava@gmail.com</a>
              <img src={call} alt="Phone" className="icon" />
              <p>Phone: +918817003763</p>
            </div>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-details">
            <h2><b>Full Stack Developer</b></h2>
            <img src={loki} alt="Abhi Shrivastava" className="profile-img" />
            <br/>
            <b>Lokesh Sable</b>
            <div className="contact-icons">
              <img src={mail} alt="Email" className="icon" />
              <a href="https://mail.google.com">abhishrivastava@gmail.com</a>
              <img src={call} alt="Phone" className="icon" />
              <p>Phone: +918817003763</p>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default ContactUs;
