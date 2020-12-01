import React from 'react';

import User from './User';
import Result from './Result';
import {
  Link
} from "react-router-dom";


function UsersList({ searchData }) {
  function renderUserList() {
    if (searchData.length <= 0) {
      return <Result>No data sorry ;-(</Result>;
    } else {
      const users = searchData.map((el) => <li className="users__item"><User key={el.id} data={el} /><Link to={`/user/${el.id}`} exact>View</Link></li>);
      return users;
    }
  }
  return (
    <ul className="users__list">
      {renderUserList()}
    </ul>
  );
}

export default UsersList;