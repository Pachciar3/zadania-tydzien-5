import React, { useEffect } from 'react';
import UsersList from './UsersList';
import User from './User';
import UserSearch from './UserSearch';

function UsersContainer() {
  useEffect(() => {
    fetch('http://localhost:3000/users.json')
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);
  return (
    <div className="users">
      <UserSearch />
      <UsersList>
        <User>1.</User>
        <User>2.</User>
        <User>3.</User>
      </UsersList>
    </div>
  );
}

export default UsersContainer;