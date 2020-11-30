import React, { useContext }from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import {GlobalContext} from '../../context/global.js';
import './header.scss';

function Header (props) {

  const globalContext = useContext(GlobalContext);

  return(
  <Navbar bg="primary" variant="dark">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
    </Nav>
    <Button variant="danger">Log Out</Button>
    <Button variant="success" onClick={globalContext.toggleMode}>{globalContext.mode}</Button>
  </Navbar>

  )
}

export default Header;