import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import './settings-page.scss';
import { SettingsContext } from '../../context/settings-context.js';
import useForm from '../form-hook/form-hook.js';

function SettingsPage() {
  const settingsContext = useContext(SettingsContext);
  const [handleSubmit, handleChange] = useForm(doneWithForm);

  function doneWithForm(formItem) {}

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
            name="displayPerScreen"
            value="3"
            defaultChecked
          />
          <Form.Check
            inline
            onChange={handleChange}
            type="radio"
            label="5"
            name="displayPerScreen"
            value="5"
          />
          <Form.Check
            inline
            onChange={handleChange}
            type="radio"
            label="8"
            name="displayPerScreen"
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
            name="seeCompletedItems"
            value="true"
            defaultChecked
          />
          <Form.Check
            inline
            onChange={handleChange}
            type="radio"
            label="NO"
            name="seeCompletedItems"
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
            name="sortby"
            value="difficulty"
            defaultChecked
          />
          <Form.Check
            inline
            onChange={handleChange}
            type="radio"
            label="Assignee"
            name="sortby"
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
