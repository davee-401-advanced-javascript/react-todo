import axios from 'axios';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';

import List from './components/list/list.js'
import SmallNav from './components/small-nav/small-nav.js'
import Header from './components/header/header.js'
import TodoForm from './components/form/form.js'
import './styles.scss';



function App() {

  const [item, setItem] = useState({});
  const [itemList, setItemList] = useState([]);
  // const [numberActive, setNumberActive] = useState(0);

  function updateItem(obj) {
    setItem(obj);
    makePost(obj);
    let updatedList = [...itemList, obj];
    setItemList(updatedList);
  }

  function updateList(array) {
    setItemList(array);
  }

  async function makePost(obj) {
    let raw = await axios(
      {
        method: 'POST',
        url: 'https://davee-auth-api-server.herokuapp.com/api/v1/todo',
        data: obj
      });
  }

  async function getAll() {
    let raw = await axios(
      {
        method: 'GET',
        url: 'https://davee-auth-api-server.herokuapp.com/api/v1/todo'
      });
      if(raw) {
        setItemList(raw.data.results);
      }
  }

  useEffect(()=> {
    document.title = `To Do List: ${itemList.length}`
  }, [itemList])
  
  useEffect(() => {
    getAll();
  }, [])
  

//useEffect on initial pageload
  //axios GET all 
  // if anything returned, set initial state of itemlist


//LOGIC FOR LIST*********************************************


// function updateStatus(itemList){
//   //grabs list item
//   //PUT call to update item in API DB
//   //update itemList
// }

// function deleteItem(){
//   //user can delete todo item from list
// }

  return (
    <>
      <Header />
      <SmallNav itemList={itemList} />
      <Container fluid className="main">
        <Row>
          <Col>
            <TodoForm updateItem={updateItem}/>
          </Col>
          <Col>
            <List itemList={itemList} updateList={updateList}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
