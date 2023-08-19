import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure you've included the Bootstrap CSS

const Header = () => {
  const isLoggedIn = true; // You can change this based on your authentication state

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src="your-logo-url.png" // Replace with your logo URL
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          {/* Add more Nav.Link items as needed */}
        </Nav>
        <Nav>
          {isLoggedIn ? (
            <Button variant="outline-light" className="mr-2">
              Logout
            </Button>
          ) : (
            <Button variant="outline-light" className="mr-2">
              Login
            </Button>
          )}
          <Button variant="primary">Donate Now</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
