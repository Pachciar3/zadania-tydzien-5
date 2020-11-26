import React, { useState } from 'react';

import Button from '../components/Button';
import NavMenu from '../components/NavMenu';

function Excersise3() {
  const [showMenu, setShowMenu] = useState(false);

  function handleToggleMenu() {
    setShowMenu((prev) => prev = !prev);
  }

  return (
    <div style={{ marginBottom: 20 }}>
      <Button type="button" handleClick={handleToggleMenu}>Toggle menu</Button>
      {showMenu && <NavMenu handleClose={handleToggleMenu} />}
    </div>
  );
}

export default Excersise3;