import './App.css'
import React from 'react';
import { Navbar, Container, Nav, NavbarToggle, NavbarCollapse } from 'react-bootstrap';

function navbar() {

  return (
    <>
      <header>
        <Navbar expand='lg' variant='dark' className='navBar'>
          <Container fluid>
            <Navbar.Brand href='#' className='navbarTitle'>
              Eugui M. Tomás
            </Navbar.Brand>
            <NavbarToggle aria-controls='navegationBar' />
              <NavbarCollapse id='navegationBar' className='justify-content-end'>
                <Nav className='navbarList'>
                  <Nav.Link className='navbarLink' href='#aboutMe'>About Me</Nav.Link>
                  <Nav.Link className='navbarLink' href='#portfolio'>Portfolio</Nav.Link>
                  <Nav.Link className='navbarLink' href='#contact'>Contact</Nav.Link>
                  <Nav.Link className='navbarLink' href='#certificate'>Certificate</Nav.Link>
                </Nav>
              </NavbarCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default navbar
