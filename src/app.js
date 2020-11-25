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
  const [active, setActive] = useState(0);

  
  function updateItem(obj) {
    makePost(obj);
  }


  function updateActive(array) {
    let active = array.reduce((acc, item, i) => {
      if(item.complete === false){
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
    setActive(active);
  }


  async function getAll() {
    let raw = await axios(
      {
        method: 'GET',
        url: 'https://davee-auth-api-server.herokuapp.com/api/v1/todo'
      });
      if(raw) {
        setItemList(raw.data.results);
        updateActive(raw.data.results);
      }
  }
  
  
  async function makePost(obj) {
    let raw = await axios(
      {
        method: 'POST',
        url: 'https://davee-auth-api-server.herokuapp.com/api/v1/todo',
        data: obj
      });
      getAll();
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
    document.title = `To Do List: ${active}`
  }, [active])
  

  useEffect(() => {
    getAll();
  }, [])
  

  return (
    <>
      <Header />
      <SmallNav active={active} />
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
