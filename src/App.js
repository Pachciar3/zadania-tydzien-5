import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import { Excersise1, Excersise2, Excersise3, Excersise4 } from './exercises';

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
          <Route path="/excersise-4">
            <Excersise4 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
