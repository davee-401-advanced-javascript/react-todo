import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

import './form.scss';

function TodoForm (props) {

  const[formItem, setFormItem] = useState({});

  function handleChange(e) {
    let newItem = {
      ...formItem, 
      [e.target.name]: e.target.value,
      complete: false,
      difficulty: 5
    }
    setFormItem(newItem);
  }

  function handleSubmit(e){
    e.preventDefault();
    props.updateCurrent(formItem);
  }


  return(
    
    <Form onSubmit={handleSubmit}>
      <h4>Add To Do Item</h4>
      <Form.Group onChange={handleChange} controlId="formBasicTask">
        <Form.Label>To Do Item</Form.Label>
        <Form.Control
          name='text' 
          type="text" 
          placeholder="Enter Task"
          required
           />
      </Form.Group>

      <Form.Group onChange={handleChange} controlId="formBasicName">
        <Form.Label>Assigned To</Form.Label>
        <Form.Control
          name='assignee' 
          type="text" 
          placeholder="Assignee Name"
          required 
        />
      </Form.Group>

      <Form.Group onChange={handleChange} controlId="formBasicRange">
        <Form.Label>Difficulty</Form.Label>
        <Form.Control
          name='difficulty' 
          type="range" 
          min='1' 
          max='10'
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add to List!
      </Button>
    </Form>

  )

}

export default TodoForm;