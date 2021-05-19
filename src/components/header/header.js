import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import LogIn from '../../context/auth/login.js';
// import SignUp from '../signup/signup.js';

function Header(props) {
  return (
    <Navbar bg="primary" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
      <LogIn />
      {/* <SignUp /> */}
    </Navbar>
  );
}

export default Header;
