import React from 'react';

function User({ data }) {
  return (
    <div className="user">
      <img src={data.picture} alt={data.name} />
      <h4>{data.name}</h4>
      <ul>
        <li><span>Balance: </span>{data.balance}</li>
        <li><span>Age: </span>{data.age}</li>
        <li><span>Gender: </span>{data.gender}</li>
        <li><span>Company: </span>{data.company}</li>
        <li><span>Email: </span>{data.email}</li>
      </ul>
    </div>
  );
}

export default User;