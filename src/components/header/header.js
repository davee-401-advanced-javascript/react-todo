import React, { useContext }from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import LogIn from '../../context/auth/login.js'
// import {SettingsContext} from '../../context/settings-context.js';

function Header (props) {

  // const settingsContext = useContext(SettingsContext);

  return(
  <Navbar bg="primary" variant="dark">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
    </Nav>
    <LogIn />
    {/* <Button variant="danger">Log Out</Button> */}
    {/* <Button variant="success" onClick={globalContext.toggleMode}>{globalContext.mode}</Button> */}
  </Navbar>

  )
}

export default Header;