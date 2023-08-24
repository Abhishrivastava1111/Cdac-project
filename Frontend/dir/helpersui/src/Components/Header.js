import {React, useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'


const Header = () => {
  const nevigate = useHistory();
  var [isLoggedIn, setIsLoggedin] = useState(false)
  const loginStatus = JSON.parse(sessionStorage.getItem('credential'));
  console.log(loginStatus)

  
  const RedirectToLogin=()=>{
    if(loginStatus)
    setIsLoggedin(true)
    nevigate.push({
      pathname: '/login',
      state: { isLoggedIn: false  }
    });
  }
 
  useEffect(()=>{
    
    if(loginStatus){
       setIsLoggedin(true) 
    } 
  },[isLoggedIn])

  const logout =()=>{
    sessionStorage.removeItem('credential')
    setIsLoggedin(false)
  }
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src="/image.png" 
          width="91"
          height="44"
          className="d-inline-block align-top"
         
         
        />
      </Navbar.Brand>
      
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"style={{ width: '600px',marginLeft:'100px', justifyContent: 'space-evenly' }} >
          <Nav.Link href="#ADLogin">Admin Login</Nav.Link>
          <Nav.Link href="#about">Home</Nav.Link>
          <Nav.Link href="#Helper">Be A Helper</Nav.Link>
          <Nav.Link href="#Stories">Read Sucess Stories</Nav.Link>
          <Nav.Link href="#Contact">Contact Us</Nav.Link>
          <Nav.Link href="#Scope">Our Scope</Nav.Link>
          
        </Nav>
        <Nav style={{marginLeft:'300px'}}>
          {isLoggedIn ? (
            <Button variant="outline-light" className="mr-2" 
            onClick={()=>{
              logout()
              setIsLoggedin(false)
            }}>
              Logout
            </Button>
          ) : (
            <Button variant="outline-light" className="mr-2" onClick={()=>{
              RedirectToLogin();
              
            }}>
              Login
            </Button>
          )}
          <Button style={{ color:'black',
           height: '40px',
           width: '290px',
           backgroundColor: 'yellow'}}>Donate Now</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
