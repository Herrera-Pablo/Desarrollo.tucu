import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">desarrollo.tucu</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" data-anchor="home">Inicio</Nav.Link>
            <Nav.Link href="#features" data-anchor="features">Servicios</Nav.Link>
            <Nav.Link href="#cards1" data-anchor="cards1">Tipos de sitio</Nav.Link>
            <Nav.Link href="#about" data-anchor="about">Quienes somos</Nav.Link>
            <Nav.Link href="#contact" data-anchor="contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
