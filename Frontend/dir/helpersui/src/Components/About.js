// import React from 'react';
import mail from "./image/mail.png"
import call from "./image/call.png"
import loki from "./image/loki.png"
import shubham from "./image/shubham.png"
import vaibhav from "./image/vaibhav.png"
import abhi from "./image/abhi.png"
function ContactUs() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Contact Us</h1>
        
        <div >
          <h2><p>If you have any questions or inquiries, feel free to contact us:</p></h2>
         
         <center><table>
          <td>
          <div className="contact-div">
            <center>
            
              <img src={loki}width={150} height={150}></img> <br></br>
            <img src={mail} width={50} height={50} ></img>
            <h2><a href="https://mail.google.com" style={{ color: 'black' }} >
            <h3>Email: lokeshsable@gmail.com</h3><br></br></a></h2>
            <img src={call} width = {50} heigh={50}></img>
            <p><h3>Phone: (123) 456-7890</h3></p></center>
            </div></td>

            <td>
            <div className="contact-div">
              <center>
              <img src={shubham}width={150} height={150}></img> <br></br>
            <img src={mail} width={50} height={50} ></img>
            <h2><a href="https://mail.google.com" style={{ color: 'black' }} >
            <h3>Email: shubhamgujar@gmail.com</h3><br></br></a></h2>
            <img src={call} width = {50} heigh={50}></img>
            <p><h3>Phone: (123) 456-7890</h3></p></center>
            </div></td>


            <td>
            <div className="contact-div">
              <center>
              <img src={vaibhav}width={150} height={150}></img> <br></br>
            <img src={mail} width={50} height={50} ></img>
            <h2><a href="https://mail.google.com" style={{ color: 'black' }} >
            <h3>Email: vaibhavkale@gmail.com</h3><br></br></a></h2>
            <img src={call} width = {50} heigh={50}></img>
            <p><h3>Phone: (123) 456-7890</h3></p></center>
            </div></td> 


            <td>
            <div className="contact-div">
              <center>
              <img src={abhi}width={150} height={150}></img> <br></br>
            <img src={mail} width={50} height={50} ></img>
            <h2><a href="https://mail.google.com" style={{ color: 'black' }} >
            <h3>Email: abhishrivastava@gmail.com</h3><br></br></a></h2>
            <img src={call} width = {50} heigh={50}></img>
            <p><h3>Phone: (123) 456-7890</h3></p></center>
            </div></td>
            </table></center>
        </div>

      </div>
    );
  }
  
  const styles = {
    container: {
      textAlign: 'center',
      padding: '2rem',
    },
    title: {
      marginBottom: '1rem',
    },
    content: {
      maxWidth: '400px',
      margin: '0 auto',
    },
  };
  
  export default ContactUs;