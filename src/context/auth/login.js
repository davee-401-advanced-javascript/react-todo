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

  const handleLogout = () => {
    document.location.href = '/';
    userContext.logout();
  };

  return (
    <If condition={userContext.isLoggedIn}>
      <Then>
        <Button variant="light" onClick={handleLogout}>
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
