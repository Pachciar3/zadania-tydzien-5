import React, { useState, useEffect } from 'react';
import UsersList from './components/UsersList';
import UserSearch from './components/UserSearch';
import Result from './components/Result';

function UsersContainer() {
  const [usersData, setUsersData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchBoxValue, setSearchBoxValue] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/users.json')
      .then(response => response.json())
      .then(data => { setUsersData(data); setIsLoaded(true); })
      .catch(error => setIsError(error));
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

  function showUsersList() {
    if (isLoaded) {
      return <UsersList searchData={searchData} />;
    } else {
      if (isError) {
        return <Result>Loading error</Result>;
      }
      return <Result>Loading...</Result>;
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
      {showUsersList()}
    </div>
  );
}

export default UsersContainer;