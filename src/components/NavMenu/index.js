import React from 'react';

import {
  NavLink
} from "react-router-dom";
import './index.css';

function NavMenu({ handleClose }) {
  return (
    <nav className="main-navigation">
      <ul>
        <li><NavLink activeClassName="selected" onClick={handleClose} to="/excersise-1">Excersise 1</NavLink></li>
        <li><NavLink activeClassName="selected" onClick={handleClose} to="/excersise-2">Excersise 2</NavLink></li>
        <li><NavLink activeClassName="selected" onClick={handleClose} exact to="/">Excersise 3</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavMenu;