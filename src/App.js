import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import { Excersise1, Excersise2, Excersise3 } from './exercises';

function App() {

  return (
    <div className="App">
      <Router>
        <Excersise3 />
        <Switch>
          <Route path="/" exact>
            <div> ^^ Click button ;-)</div>
          </Route>
          <Route path="/excersise-1">
            <Excersise1 />
          </Route>
          <Route path="/excersise-2">
            <Excersise2 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
