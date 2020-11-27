import React from 'react';

function User({ children }) {
  return (
    <li className="users__item">
      {children}
    </li>
  );
}

export default User;