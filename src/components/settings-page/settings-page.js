import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import './settings-page.scss';
import useForm from '../form-hook/form-hook.js';

function SettingsPage() {
  const [handleSubmit, handleChange] = useForm(doneWithForm);

  function doneWithForm(formItem) {
    localStorage.setItem('ToDoApp-Settings', JSON.stringify(formItem));
    document.location.href = '/';
  }

  return (
    <>
      <Navbar className="small-nav" bg="dark" variant="dark">
        <Navbar.Brand>Settings</Navbar.Brand>
      </Navbar>
      <Form className="settings-form" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Display how many items per screen?</Form.Label>
          <br></br>
          <Form.Check
            inline
            onChange={handleChange}
            type="radio"
            label="3"
            name="itemsPerScreen"
            value="3"
            defaultChecked
          />
          <Form.Check
            inline
            onChange={handleChange}
            type="radio"
            label="5"
            name="itemsPerScreen"
            value="5"
          />
          <Form.Check
            inline
            onChange={handleChange}
            type="radio"
            label="8"
            name="itemsPerScreen"
            value="8"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Choose to See Completed Items?</Form.Label>
          <br></br>
          <Form.Check
            inline
            onChange={handleChange}
            type="radio"
            label="YES"
            name="displayCompleted"
            value="true"
            defaultChecked
          />
          <Form.Check
            inline
            onChange={handleChange}
            type="radio"
            label="NO"
            name="displayCompleted"
            value="false"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Sort by Difficulty OR Assignee</Form.Label>
          <br></br>
          <Form.Check
            inline
            onChange={handleChange}
            type="radio"
            label="Difficulty"
            name="defaultSort"
            value="difficulty"
            defaultChecked
          />
          <Form.Check
            inline
            onChange={handleChange}
            type="radio"
            label="Assignee"
            name="defaultSort"
            value="assignee"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Change Settings
        </Button>
      </Form>
    </>
  );
}

export default SettingsPage;
