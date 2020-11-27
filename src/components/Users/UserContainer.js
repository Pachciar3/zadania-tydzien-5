import React, { useState, useEffect } from 'react';
import UsersList from './UsersList';
import User from './User';
import UserSearch from './UserSearch';
import {
  Link
} from "react-router-dom";

function UsersContainer() {
  const [usersData, setUsersData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [isError, setisError] = useState(false);
  const [searchBoxValue, setSearchBoxValue] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/users.json')
      .then(response => response.json())
      .then(data => setUsersData(data))
      .catch(error => setisError(error));
  }, []);

  function handleSearchBoxReset() {
    setSearchBoxValue('');
  }

  function handleSearchBoxSubmit(e) {
    e.preventDefault();
    const clonedUsersData = [...usersData];

    const usersDataAfterFilter = clonedUsersData.filter((el) => el.name.includes(searchBoxValue));
    setSearchData(usersDataAfterFilter);
    setSearchBoxValue('');
  }

  function handleSearchBoxInputChange(e) {
    setSearchBoxValue(e.target.value);
  }

  function renderUsersList() {
    if (!isError) {
      if (searchData.length <= 0) {
        return <div style={{ textAlign: "center" }}>No data sorry ;-(</div>;
      } else {
        const users = searchData.map((el) => <li className="user__item"><User key={el.id} data={el} /><Link to={`/user/${el.id}`} exact>View</Link></li>);
        return <UsersList>{users}</UsersList>;
      }
    } else {
      return <div style={{ textAlign: "center" }}> Loading error</ div>;
    }
  }

  return (
    <div className="users">
      <UserSearch
        searchValue={searchBoxValue}
        handleReset={handleSearchBoxReset}
        handleSubmit={handleSearchBoxSubmit}
        handleInputChange={handleSearchBoxInputChange}
      />
      {renderUsersList()}
    </div>
  );
}

export default UsersContainer;