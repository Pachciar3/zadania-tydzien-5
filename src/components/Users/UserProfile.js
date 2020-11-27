import React, { useState, useEffect } from 'react';

import {
  useParams,
  Link
} from "react-router-dom";
import User from './User';

function UserProfile() {
  let { id } = useParams();
  const [items, setItems] = useState([]);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/users.json')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => setisError(error));
  }, [id]);

  if (!isError) {
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
    return <div>404 - {id}</div>;
  }
  return (
    <div>GETTING ERROR</div>
  );
}

export default UserProfile;