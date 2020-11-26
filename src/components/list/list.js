import React, {useState, useEffect} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Toast from 'react-bootstrap/Toast'
import Badge from 'react-bootstrap/Badge'
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';

import './list.scss';

function List(props) {

  const [page, setPage] = useState(1);
  const [tempArray, setTempArray] = useState([])

  // useEffect( () => {
  //   setTempArray(itemPagina(props.itemList, page));
  // }, [])
  
  useEffect ( () => {
    setTempArray(itemPagina(props.itemList, page));
  },[page]);

  function itemPagina(objArr, page){
    let itemPerPage = 3;
    let tempArr = props.itemList.slice((page*itemPerPage)-3, page*itemPerPage);
    return(tempArr);
  };

  function pageClick(pageClicked){
   setPage(pageClicked);
  }

  let renderList = tempArray.map((item)=> (
      <>
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
      
    </>
  ))


  let renderButtons = (
      //take the length of the item array and divide by 3
      //render out that number of buttons using index?,
      //on click of that button, call function that resets the page variable to the number of 
      // the button
    <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item"><a class="page-link" href="3">Previous</a></li>
      <li class="page-item" ><a class="page-link" href="1" onClick={()=> pageClick(1)}>1</a></li>
      <li class="page-item"><a class="page-link" href="2" onClick={()=> pageClick(2)}>2</a></li>
      <li class="page-item"><a class="page-link" href="3" onClick={()=> pageClick(3)}>3</a></li>
      <li class="page-item"><a class="page-link" href="1">Next</a></li>
    </ul>
  </nav>
  )

  return(
    <>
      <ListGroup>
        {renderList}
        {renderButtons}
      </ListGroup>
    </>
  )
}

export default List;


