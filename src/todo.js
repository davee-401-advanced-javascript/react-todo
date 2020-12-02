import axios from 'axios';
import React, {useState, useEffect, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {GlobalContext} from './context/global.js';

import List from './components/list/list.js'
import SmallNav from './components/small-nav/small-nav.js'

import TodoForm from './components/form/form.js'
import './styles.scss';


function Todo() {

  const [itemList, setItemList] = useState([]);
  const [active, setActive] = useState(0);
  const globalContext = useContext(GlobalContext);
  
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


  function sortHelper(array) {
    if(globalContext.defaultSort === 'difficulty'){
      array.sort((a,b) => {
        return a.difficulty - b.difficulty;
      })
    } else {
      array.sort((a,b) => {
        var nameA = a.assignee.toUpperCase();
        var nameB = b.assignee.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }

    // if(globalContext.displayCompleted === false) {
    //   array = array.filter( obj => obj.complete === false);
    // }

    return array;
  }


  async function getAll() {
    let raw = await axios(
      {
        method: 'GET',
        url: 'https://davee-auth-api-server.herokuapp.com/api/v1/todo'
      });
      if(raw) {
        let sorter = sortHelper(raw.data.results);
        setItemList(sorter);
        updateActive(sorter);
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

export default Todo;
