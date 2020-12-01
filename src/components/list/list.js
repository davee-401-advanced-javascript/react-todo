import React, {useState, useEffect, useContext} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Toast from 'react-bootstrap/Toast'
import Badge from 'react-bootstrap/Badge'
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';
import {GlobalContext} from '../../context/global.js';
import './list.scss';
function List(props) {

  const globalContext = useContext(GlobalContext);

  const [page, setPage] = useState(1);
  const [tempArray, setTempArray] = useState([])
  const [buttonListArray, setButtonListArray] = useState([])


  useEffect ( () => {
    let initial = itemPagina(props.itemList, page)
    setTempArray(initial);
  },[]);


  useEffect ( () => {
    let clickedPage = itemPagina(props.itemList, page)
    setTempArray(clickedPage);
  },[page]);


  useEffect ( () => {
    let length = props.itemList.length;
    let iterator = Math.ceil(length/3);
    let result = [];
    for(let i = 1; i <= iterator; i++){
      result.push(i);
    }
    setButtonListArray(result);
  },[]);


  function itemPagina(objArr, page){
    let itemPerPage = 3;
    let tempArr = objArr.slice((page*itemPerPage)-3, page*itemPerPage);
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


  /*
  let LiElement = ({value}) => (
    <li class="page-item" ><a class="page-link" href="#" onClick={()=> pageClick(value)}>{value}</a></li>
  )

  const ButtonList = ({array})=> (
    <>
      {array.map((value, i) => (
        <LiElement value={i+1}/>
      ))} 
    </>
  );
  */


  ////   This is the refactor from the code above 
  const buttonList = buttonListArray.map((value, i) => (
    <li class="page-item" ><a class="page-link" href="#" onClick={()=> pageClick(i+1)}>{i+1}</a></li>
  ))     

  
  let renderButtons = (
    <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item"><a class="page-link" href="#">Previous</a></li>

      {/* <ButtonList array={buttonListArray} /> */}
      {buttonList}

      <li class="page-item"><a class="page-link" href="#">Next</a></li>
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
