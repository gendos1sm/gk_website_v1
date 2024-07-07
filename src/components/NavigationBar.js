import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavigationBar.css';

const NavigationBar = () => (
  <Navbar bg="success" variant="dark" expand="lg">
    <Navbar.Brand href="/">GK School</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/about">About Us</Nav.Link>
        <Nav.Link href="/courses">Courses</Nav.Link>
        <Nav.Link href="/create-course">Create Course</Nav.Link>
        <Nav.Link href="/coaches">Coaches</Nav.Link>
        <Nav.Link href="/contact">Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;