import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import Hamburger from 'hamburger-react';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <LinkContainer to="/">
          <Navbar.Brand>JEWELRY STORE</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span>
            <Hamburger color="#000000" toggled={isOpen} toggle={setOpen} />
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <IndexLinkContainer to="/">
              <Nav.Link onClick={() => setOpen(false)}>STORE</Nav.Link>
            </IndexLinkContainer>
            <LinkContainer to="/about">
              <Nav.Link onClick={() => setOpen(false)}>ABOUT</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link onClick={() => setOpen(false)}>CART</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signup">
              <Nav.Link onClick={() => setOpen(false)}>SIGN UP</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
