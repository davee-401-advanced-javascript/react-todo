import axios from 'axios';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import List from './components/list/list.js'
import SmallNav from './components/small-nav/small-nav.js'
import Header from './components/header/header.js'
import TodoForm from './components/form/form.js'
import './styles.scss';



function App() {

  const [itemList, setItemList] = useState([]);
  // const [numberActive, setNumberActive] = useState(0);

  function updateItem(obj) {
    makePost(obj);
    getAll();
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


  async function makePut(obj) {

    if(obj.complete) {
      obj.complete = false;
    } else{
      obj.complete =true
    }

    let raw = await axios(
      {
        method: 'PUT',
        url: `https://davee-auth-api-server.herokuapp.com/api/v1/todo/${obj._id}`,
        data: obj
      });
      console.log('this got putted', raw);
      getAll();
  }


  async function makeDelete(id) {
    let raw = await axios(
      {
        method: 'DELETE',
        url: `https://davee-auth-api-server.herokuapp.com/api/v1/todo/${id}`,
      });
      getAll();
  }

  useEffect(()=> {
    document.title = `To Do List: ${itemList.length}`
  }, [itemList])
  
  useEffect(() => {
    getAll();
  }, [])
  

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
            <List itemList={itemList} makeDelete={makeDelete} makePut={makePut}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
