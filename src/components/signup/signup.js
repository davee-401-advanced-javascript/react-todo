import React, { useContext, useState }from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {If, Then, Else, When} from 'react-if';



import {LoginContext} from '../../context/auth/context.js'
import LogIn from '../../context/auth/login.js'
// import {GlobalContext} from '../../context/global.js';

function SignUp (props) {

  // const globalContext = useContext(GlobalContext);
  const userContext = useContext(LoginContext);
  const [user, setUser] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    userContext.signUp(user);
  }

  const handleChange = (e) => {
    setUser( { ...user, [e.target.name]: e.target.value })
  }

  return(
    <When condition={!userContext.isLoggedIn}>
        <form onSubmit={handleSubmit}>
          <input name="username" onChange={handleChange} />
          <input name="password" type="password" onChange={handleChange} />
          <button type="submit">Sign Up</button>
        </form>
    </When>

  )
}

export default SignUp;