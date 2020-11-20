import React, {useState} from 'react';
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
    e.target.reset();
    setFormItem({})
  }

  return(
    
    <Form onSubmit={handleSubmit}>
      <h4>Add To Do Item</h4>
      <Form.Group onChange={handleChange} controlId="formBasicTask">
        <Form.Label>To Do Item</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Task"
          name='text' />
      </Form.Group>

      <Form.Group onChange={handleChange}controlId="formBasicName">
        <Form.Label>Assigned To</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Assignee Name" 
        name='assignee'
        />
      </Form.Group>

      <Form.Group onChange={handleChange}controlId="formBasicRange">
        <Form.Label>Difficulty</Form.Label>
        <Form.Control
          name='difficulty' 
          type="range" 
          min='1' 
          max='10'/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Add to List!
      </Button>
    </Form>

  )

}

export default TodoForm;