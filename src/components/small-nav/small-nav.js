import React, {useState, useEffect} from 'react';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './small-nav.scss';

function SmallNav (props) {


  return(
    <>
    {/* <Nav defaultActiveKey="/home" as="ul">
    <Nav.Item as="li">
      <Nav.Link href="/home">TO DO MANAGER</Nav.Link>
    </Nav.Item>
    </Nav> */}

    <Navbar className="small-nav" bg="dark" variant="dark">
      <Navbar.Brand href="#home">To Do List Manager({props.itemList.length})</Navbar.Brand>
    </Navbar>
    </>
  )
}

export default SmallNav;