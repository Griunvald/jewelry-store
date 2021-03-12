import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Navbar.Brand href="#home">JEWELRY STORE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>STORE</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>ABOUT</Nav.Link>
            </LinkContainer>
          </Nav>

          <Nav className="ml-auto">
            <LinkContainer to="/cart">
              <Nav.Link>CART</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signup">
              <Nav.Link>SIGN UP</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
