import React, {useState, useEffect} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Toast from 'react-bootstrap/Toast'
import Badge from 'react-bootstrap/Badge'
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';

import './list.scss';


function List(props) {

  let renderList = props.itemList.map((item)=> (

      <Toast key={item._id} onClose={() => props.makeDelete(item._id)}>
      <Toast.Header>
        <If condition={item.complete} >
          <Then>
            <Badge onClick={()=> props.makePut(item)} pill variant="danger">
              Complete
            </Badge>
          </Then>
          <Else>
            <Badge onClick={()=> props.makePut(item)} pill variant="success">
              Pending
            </Badge>
          </Else>
        </If>
        <strong className="mr-auto">  {item.assignee}</strong>
        <small>Difficulty: {item.difficulty}</small>
      </Toast.Header>
      <Toast.Body>{item.text}</Toast.Body>
      </Toast>
 
  ))

  return(
    <>
      <ListGroup>
        {renderList}
      </ListGroup>
    </>
  )
}

export default List;

