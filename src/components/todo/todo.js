import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { SettingsContext } from '../../context/settings-context.js';

import List from '../list/list.js';
import SmallNav from '../small-nav/small-nav.js';

import TodoForm from '../form/form.js';
import './todo.scss';

function Todo() {
  const [itemList, setItemList] = useState([]);
  const [active, setActive] = useState(0);
  const settingsContext = useContext(SettingsContext);

  function updateActive(array) {
    let active = array.reduce((acc, item, i) => {
      if (item.complete === false) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
    setActive(active);
  }

  function sortHelper(array) {
    if (settingsContext.defaultSort === 'difficulty') {
      array.sort((a, b) => {
        return a.difficulty - b.difficulty;
      });
    } else {
      array.sort((a, b) => {
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

    if (settingsContext.displayCompleted === false) {
      array = array.filter((obj) => obj.complete === false);
    }

    return array;
  }

  async function getAll() {
    let raw = await axios({
      method: 'GET',
      url: 'https://davee-auth-api-server.herokuapp.com/api/v1/todo',
    });
    if (raw) {
      let sorted = sortHelper(raw.data.results);
      console.log('🚀 ~ file: todo.js ~ line 65 ~ getAll ~ sorted ', sorted);
      setItemList(sorted);
      updateActive(sorted);
    }
  }

  async function makePost(obj) {
    await axios({
      method: 'POST',
      url: 'https://davee-auth-api-server.herokuapp.com/api/v1/todo',
      data: obj,
    });
    getAll();
  }

  async function makePut(obj) {
    if (obj.complete) {
      obj.complete = false;
    } else {
      obj.complete = true;
    }

    await axios({
      method: 'PUT',
      url: `https://davee-auth-api-server.herokuapp.com/api/v1/todo/${obj._id}`,
      data: obj,
    });
    getAll();
  }

  async function makeDelete(id) {
    await axios({
      method: 'DELETE',
      url: `https://davee-auth-api-server.herokuapp.com/api/v1/todo/${id}`,
    });
    getAll();
  }

  useEffect(() => {
    document.title = `To Do List: ${active}`;
  }, [active]);

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <SmallNav active={active} />
      <Container fluid className="main">
        <Row>
          <Col>
            <TodoForm makePost={makePost} />
          </Col>
          <Col>
            <List
              itemList={itemList}
              makeDelete={makeDelete}
              makePut={makePut}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Todo;
