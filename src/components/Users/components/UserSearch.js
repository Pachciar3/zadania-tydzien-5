import React from 'react';

import Button from '../../Button';

function UserSearch({ searchValue, handleSubmit, handleReset, handleInputChange }) {
  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <label className="search-box__field">
        <div className="search-box__name">Name:</div>
        <input value={searchValue} onChange={handleInputChange} placeholder="Type a part of name or surname, like 'B'" type="text" />
      </label>
      <Button type="submit">Search</Button>
      <Button type="button" handleClick={handleReset}>Reset</Button>
    </form>
  );
}

export default UserSearch;