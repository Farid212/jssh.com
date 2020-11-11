import React from 'react';
import { Link } from 'react-router-dom';

// components bootstrap
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () =>(
    <Navbar bg="primary" expand="lg" variant="dark">
    <Navbar.Brand>JSSH</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-nav" />
    <Navbar.Collapse id="navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
) 

export default Navigation;