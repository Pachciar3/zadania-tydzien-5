import React from 'react';

import Button from '../Button';

function UserSearch() {
  return (
    <form className="search-box">
      <label className="search-box__field"><div className="search-box__name">Search:</div><input type="text" /></label>
      <Button type="reset">Reset</Button>
    </form>
  );
}

export default UserSearch;