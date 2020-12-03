import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,} from "react-router-dom";

import SettingsContext from './context/global.js';
import Todo from './components/todo/todo.js';
import SettingsPage from './components/settings.js';
import LogInContext from './context/auth/context.js'
import Header from './components/header/header.js'


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
              <Todo/>
            </Route>
        </Router>
      </LogInContext>
  </SettingsContext>

  );
}

export default App;
