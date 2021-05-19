import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SettingsContext from './context/settings-context.js';
import LogInProvider from './context/auth/context.js';
import Header from './components/header/header.js';
import Todo from './components/todo/todo.js';
import SettingsPage from './components/settings-page/settings-page.js';
import Auth from './context/auth/auth.js';

function App() {
  return (
    <SettingsContext>
      <LogInProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Auth capability="read">
                <Todo />
              </Auth>
            </Route>
            <Route exact path="/settings">
              <SettingsPage />
            </Route>
          </Switch>
        </Router>
      </LogInProvider>
    </SettingsContext>
  );
}

export default App;
