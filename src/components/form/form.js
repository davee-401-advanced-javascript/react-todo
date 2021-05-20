// import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './form.scss';
import useForm from '../form-hook/form-hook.js';
import Auth from '../../context/auth/auth.js';

function TodoForm({ makePost }) {
  const [handleSubmit, handleChange] = useForm(doneWithForm);

  function doneWithForm(formItem) {
    formItem.complete = false;
    if (!formItem.difficulty) {
      formItem.difficulty = 1;
    }
    makePost(formItem);
  }

  return (
    <Auth capability="create">
      <Form className="todo-form" onSubmit={handleSubmit}>
        <h4>Add To Do Item</h4>

        <Form.Group controlId="formBasicTask">
          <Form.Label>To Do Item</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="text"
            type="text"
            placeholder="Enter Task"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <Form.Label>Assigned To</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="assignee"
            type="text"
            placeholder="Assignee Name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicRange">
          <Form.Label>Difficulty</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="difficulty"
            type="range"
            min="1"
            max="10"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add to List!
        </Button>
      </Form>
    </Auth>
  );
}

export default TodoForm;
