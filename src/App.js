import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import { Excersise1, Excersise2, Excersise3, Excersise4 } from './exercises';
import UserProfile from './components/Users/UserProfile';

function App() {

  return (
    <div className="App">
      <Router>
        <Excersise3 />
        <Switch>
          <Route path="/" exact>
            <Excersise1 />
          </Route>
          <Route path="/excersise-2">
            <Excersise2 />
          </Route>
          <Route path="/excersise-3">
            <div>Look up ^^</div>
          </Route>
          <Route path="/users">
            <Excersise4 />
          </Route>
          <Route path="/user/:id">
            <div>
              <UserProfile />
            </div>
          </Route>
          <Route path="*">
            <div>
              Error 404
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
