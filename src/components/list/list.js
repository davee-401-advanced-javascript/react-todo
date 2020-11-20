import React, {useState, useEffect} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import './list.scss';


function List(props) {

  // const ListItem = ({ value, onClick }) => <li onClick={onClick}>{value}</li>;
  // const List = ({ items, onItemClick }) => (
  //   <ul>
  //     {items.map((item, i) => (
  //       <ListItem key={i} value={item} onClick={handleItemClick} />
  //     ))}
  //   </ul>
  // );

  // let handleItemClick = (e) => {
  //   //on click, grab key of listitem clicked
  //   //go to array[itemKey], toggle status to complete
  //   //send new updated array back up to app to be rerendered
  // };
  // const[list, setList] = useState([]);



  // useEffect(()=> {
  //   console.log('From props.itemList', props.itemList);
  //   setList(props.itemList);
  // }, [props.itemList]);

  let list = props.itemList.map((item)=> (
    <ListGroup.Item action variant='success'>
    Assigne: {item.assignee} <br/>
    Task: {item.text}<br/>  
    Complete: {item.complete}<br/>  
    Difficulty: {item.difficulty}  
    </ListGroup.Item>
  ))

  return(
    <>
      <ListGroup>
    
        {list}

      </ListGroup>
    </>
  )
}

export default List;

{/* <ListGroup.Item action variant='success'>
Link 1
</ListGroup.Item>
<ListGroup.Item action variant='success'>
Link 2
</ListGroup.Item>
<ListGroup.Item action variant='danger' onClick={()=>console.log('hello')}>
This one is a button
</ListGroup.Item> */}