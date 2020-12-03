import React, {useContext}  from 'react';
import Form from 'react-bootstrap/Form'

import {GlobalContext} from './context/global.js'

function About(){

  const globalContext = useContext(GlobalContext);


  return (
    <>
    <h2>About us</h2>
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
  )
}

export default About;