import React from 'react';

function UsersList({ children }) {
  return (
    <ul className="users__list">
      {children}
    </ul>
  );
}

export default UsersList;