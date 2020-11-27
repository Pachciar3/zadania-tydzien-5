import React from 'react';

import Button from '../Button';

function UserSearch() {
  return (
    <form>
      <label>Search:<input type="text" /></label>
      <Button type="reset">Reset</Button>
    </form>
  );
}

export default UserSearch;