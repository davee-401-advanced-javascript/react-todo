import React from 'react';
import Nav from 'react-bootstrap/Nav'

function SmallNav () {
  return(
  <Nav defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
    <Nav.Link href="/home">TO DO MANAGER</Nav.Link>
  </Nav.Item>
  </Nav>
  )
}

export default SmallNav;