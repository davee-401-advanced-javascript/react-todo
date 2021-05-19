import React, { useState, useEffect } from 'react';
import superagent from 'superagent';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';

export const LoginContext = React.createContext();

function LoginProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const login = async (input) => {
    const API = process.env.REACT_APP_API;

    try {
      const response = await superagent
        .post(`${API}/signin`)
        .auth(input.username, input.password);
      const { token } = response.body;

      validateToken(token);
    } catch (e) {
      console.warn('Login Attempt Failed');
    }
  };

  const signUp = async (input) => {
    const API = process.env.REACT_APP_API;

    try {
      await superagent.post(`${API}/signup`).send(input);

      login(input);
      console.log('now logged in');
    } catch (e) {
      console.warn('Something Bad Happened. Error in Signing Up');
    }
  };

  const validateToken = (token) => {
    try {
      let tokenUser = jwt.verify(token, process.env.REACT_APP_SECRET);
      setIsLoggedIn(true);
      setUser(tokenUser);
      cookie.save('auth', token);
    } catch (e) {
      setIsLoggedIn(false);
      setUser({});
      console.warn('Token Validation Error');
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser({});
    cookie.remove('auth');
  };

  // this will check the cookie and automatically login
  useEffect(() => {
    const token = cookie.load('auth') || null;
    validateToken(token);
  }, []);

  return (
    <LoginContext.Provider value={{ isLoggedIn, user, login, logout, signUp }}>
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
