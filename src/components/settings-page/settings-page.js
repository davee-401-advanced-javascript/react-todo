import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';

import { SettingsContext } from '../../context/settings-context.js';

function SettingsPage() {
  const settingsContext = useContext(SettingsContext);

  return (
    <>
      <h2>Settings Page</h2>
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Check this switch"
        />
        <Form.Check
          disabled
          type="switch"
          label="disabled switch"
          id="disabled-custom-switch"
        />
      </Form>
    </>
  );
}

export default SettingsPage;
