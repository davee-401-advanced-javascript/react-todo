import React, { useState, useContext } from 'react';
import { If, Then, Else } from 'react-if';
import Button from 'react-bootstrap/Button';

import './login.scss';
import { LoginContext } from './context.js';

function Login(props) {
  const userContext = useContext(LoginContext);
  const [user, setUser] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    userContext.login(user);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <If condition={userContext.isLoggedIn}>
      <Then>
        <Button variant="light" onClick={userContext.logout}>
          Log Out
        </Button>
      </Then>
      <Else>
        <form onSubmit={handleSubmit}>
          <input name="username" onChange={handleChange} />
          <input name="password" type="password" onChange={handleChange} />
          <Button variant="light" type="submit">
            Login
          </Button>
        </form>
      </Else>
    </If>
  );
}

export default Login;
