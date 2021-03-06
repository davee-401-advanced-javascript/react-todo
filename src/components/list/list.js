/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import { If, Then, Else } from 'react-if';

import ListGroup from 'react-bootstrap/ListGroup';
import Toast from 'react-bootstrap/Toast';
import Badge from 'react-bootstrap/Badge';
import Pagination from 'react-bootstrap/Pagination';

import './list.scss';
import Auth from '../../context/auth/auth.js';
import { LoginContext } from '../../context/auth/context.js';
import { SettingsContext } from '../../context/settings-context.js';

function List({ itemList, makeDelete, makePut }) {
  const settingsContext = useContext(SettingsContext);
  const userContext = useContext(LoginContext);

  const [page, setPage] = useState(1);
  const [tempArray, setTempArray] = useState([]);
  const [buttonListArray, setButtonListArray] = useState([]);

  useEffect(() => {
    let initial = itemPagina(itemList, page);
    setTempArray(initial);
  }, [itemList]);

  useEffect(() => {
    let iterator = Math.ceil(itemList.length / settingsContext.itemsPerScreen);
    let result = [];
    for (let i = 1; i <= iterator; i++) {
      result.push(i);
    }
    setButtonListArray(result);
  }, [itemList]);

  useEffect(() => {
    let clickedPage = itemPagina(itemList, page);
    setTempArray(clickedPage);
  }, [page]);

  function itemPagina(objArr, page) {
    let itemPerPage = settingsContext.itemsPerScreen;
    let tempArr = objArr.slice(
      page * itemPerPage - settingsContext.itemsPerScreen,
      page * itemPerPage
    );
    return tempArr;
  }

  function pageClick(pageClicked) {
    setPage(pageClicked);
  }

  function canDelete(user) {
    return user.permissions.includes('delete');
  }

  function handleNextButton() {
    if (page < buttonListArray.length) {
      let next = page + 1;
      setPage(next);
    }
  }

  function handlePrevButton() {
    if (page > 1) {
      let previous = page - 1;
      setPage(previous);
    }
  }

  let renderList = tempArray.map((item) => (
    <>
      <Toast
        className="toast_body"
        key={item._id}
        onClose={() => makeDelete(item._id)}
      >
        <Toast.Header closeButton={canDelete(userContext.user)}>
          <If condition={item.complete}>
            <Then>
              <Auth capability="update">
                <Badge onClick={() => makePut(item)} pill variant="danger">
                  Complete
                </Badge>
              </Auth>
            </Then>
            <Else>
              <Auth capability="update">
                <Badge onClick={() => makePut(item)} pill variant="success">
                  Pending
                </Badge>
              </Auth>
            </Else>
          </If>
          <strong className="mr-auto"> {item.assignee}</strong>
          <small>Difficulty: {item.difficulty}</small>
        </Toast.Header>
        <Toast.Body>{item.text}</Toast.Body>
      </Toast>
    </>
  ));

  let paginationButtons = (
    <>
      <Pagination>
        <Pagination.Item key="previous" onClick={handlePrevButton}>
          {' '}
          Previous{' '}
        </Pagination.Item>
        {buttonListArray.map((value) => (
          <Pagination.Item key={value} onClick={() => pageClick(value)}>
            {value}
          </Pagination.Item>
        ))}
        <Pagination.Item key="next" onClick={handleNextButton}>
          {' '}
          Next{' '}
        </Pagination.Item>
      </Pagination>
    </>
  );

  return (
    <>
      <ListGroup>
        {renderList}
        {paginationButtons}
      </ListGroup>
    </>
  );
}

export default List;
