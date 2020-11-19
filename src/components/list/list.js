import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import './list.scss';


function List () {

  const ListItem = ({ value, onClick }) => <li onClick={onClick}>{value}</li>;
  const List = ({ items, onItemClick }) => (
    <ul>
      {items.map((item, i) => (
        <ListItem key={i} value={item} onClick={handleItemClick} />
      ))}
    </ul>
  );

  let handleItemClick = (e) => {
    //on click, grab key of listitem clicked
    //go to array[itemKey], toggle status to complete
    //send new updated array back up to app to be rerendered
  };




  return(
    <>
  <ListGroup defaultActiveKey="#link1">
    <ListGroup.Item action href="#link1">
      Link 1
    </ListGroup.Item>
    <ListGroup.Item action href="#link2" disabled>
      Link 2
    </ListGroup.Item>
    <ListGroup.Item action onClick={console.log('hello')}>
      This one is a button
    </ListGroup.Item>
  </ListGroup>
    </>
  )


}

export default List;

{/* <Container>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container> */}



{/* <ListGroup defaultActiveKey="#link1">
<ListGroup.Item action href="#link1">
  Link 1
</ListGroup.Item>
<ListGroup.Item action href="#link2" disabled>
  Link 2
</ListGroup.Item>
<ListGroup.Item action onClick={alertClicked}>
  This one is a button
</ListGroup.Item>
</ListGroup> */}