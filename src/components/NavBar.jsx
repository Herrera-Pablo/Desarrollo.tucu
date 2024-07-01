import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navbar.css';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">desarrollo.tucu</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" data-anchor="home">Home</Nav.Link>
            <Nav.Link href="#features" data-anchor="features">Features</Nav.Link>
            <Nav.Link href="#cta" data-anchor="cta">CTA</Nav.Link>
            <Nav.Link href="#carousel" data-anchor="carousel">Carousel</Nav.Link>
            <Nav.Link href="#testimonials" data-anchor="testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#cards1" data-anchor="cards1">Cards 1</Nav.Link>
            <Nav.Link href="#cards2" data-anchor="cards2">Cards 2</Nav.Link>
            <Nav.Link href="#about" data-anchor="about">About Us</Nav.Link>
            <Nav.Link href="#contact" data-anchor="contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
