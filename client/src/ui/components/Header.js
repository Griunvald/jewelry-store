import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { logout } from '../../store/actions/authActions';
import Hamburger from 'hamburger-react';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { currentUser } = auth;

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
            {currentUser ? (
              <NavDropdown title={currentUser.name} id="username">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={() => dispatch(logout())}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link onClick={() => setOpen(false)}>LOG IN</Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
