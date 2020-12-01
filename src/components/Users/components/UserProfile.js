import React, { useState, useEffect } from 'react';

import {
  useParams,
  Link
} from "react-router-dom";
import User from './User';
import Result from './Result';

function UserProfile() {
  let { id } = useParams();
  const [items, setItems] = useState([]);
  const [isError, setisError] = useState(false);
  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/users.json')
      .then(response => response.json())
      .then(data => { setItems(data); setisLoaded(true); })
      .catch(error => setisError(error));
  }, [id]);
  if (isLoaded) {
    const clonedItems = [...items];
    const item = clonedItems.filter((el) => el.id === parseInt(id, 10));
    if (item.length > 0) {
      console.log(item[0]);
      return (
        <>
          <Link to="/users">Back</Link>
          <User data={item[0]} />
        </>
      );
    }
    return <Result>404 - Dont find user with the number id: <strong>{id}</strong></Result>;
  } else {
    if (isError) {
      return (
        <Result>Loading error</Result>
      );
    }
    return (
      <Result>loading...</Result>
    );
  }
}

export default UserProfile;