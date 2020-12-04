import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,} from "react-router-dom";

import SettingsContext from './context/settings-context.js';
import LogInContext from './context/auth/context.js'
import Header from './components/header/header.js'
import Todo from './components/todo/todo.js';
import SettingsPage from './components/settings-page/settings-page.js';
import Auth from './context/auth/auth.js'
import SignUp from './components/signup/signup.js'


function App() {

  return (
    <SettingsContext>
      <LogInContext>
        <Router>    
            <Header />
            <Route exact path="/about">
              <SettingsPage />
            </Route>
            <Route exact path="/">
              <SignUp />
              <Auth capability="read">
                <Todo/>
              </Auth>
            </Route>
        </Router>
      </LogInContext>
  </SettingsContext>

  );
}

export default App;
