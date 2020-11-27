import React, { useState, useEffect } from 'react';
import UsersList from './UsersList';
import User from './User';
import UserSearch from './UserSearch';

function UsersContainer() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/users.json')
      .then(response => response.json())
      .then(data => setUsersData(data));
  }, []);

  function renderUsersList() {
    if (usersData.length < 0) {
      return <div>No data sorry ;-(</div>;
    } else {
      const users = usersData.map((el) => <User key={el.id} data={el} />);
      return <UsersList>{users}</UsersList>;
    }
  }

  return (
    <div className="users">
      <UserSearch />
      {renderUsersList()}
    </div>
  );
}

export default UsersContainer;