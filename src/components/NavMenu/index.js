import React from 'react';

import {
  NavLink
} from "react-router-dom";
import './index.css';

function NavMenu({ handleClose }) {
  return (
    <nav className="main-navigation">
      <ul>
        <li><NavLink activeClassName="selected" onClick={handleClose} exact to="/">Excersise 1 - Modal</NavLink></li>
        <li><NavLink activeClassName="selected" onClick={handleClose} to="/excersise-2">Excersise 2 - Snackbar</NavLink></li>
        <li><NavLink activeClassName="selected" onClick={handleClose} to="/excersise-3">Excersise 3 - Menu</NavLink></li>
        <li><NavLink activeClassName="selected" onClick={handleClose} to="/users">Excersise 4 & 5 - Users</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavMenu;