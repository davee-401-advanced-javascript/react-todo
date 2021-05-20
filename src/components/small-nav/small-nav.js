import Navbar from 'react-bootstrap/Navbar';

import './small-nav.scss';

function SmallNav(props) {
  return (
    <>
      <Navbar className="small-nav" bg="dark" variant="dark">
        <Navbar.Brand>To Do List Manager({props.active})</Navbar.Brand>
      </Navbar>
    </>
  );
}

export default SmallNav;
