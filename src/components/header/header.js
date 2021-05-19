import React, { useContext } from 'react';
import { When } from 'react-if';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import LogIn from '../../context/auth/login.js';
import { LoginContext } from '../../context/auth/context.js';

function Header(props) {
  const userContext = useContext(LoginContext);
  return (
    <Navbar bg="primary" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav>
      <When condition={userContext.isLoggedIn}>
        <Button variant="light" href="/settings">
          Settings
        </Button>
      </When>
      <LogIn />
    </Navbar>
  );
}

export default Header;
