import React, { useState } from 'react';

import Snackbar from '../components/Snackbar';
import Button from '../components/Button';

function Excersise2() {
  const [hideSnackBar, setHideSnackBar] = useState(true);

  function handleShowSnackBar() {
    setHideSnackBar(false);
  }

  function handleHideSnackBar() {
    setHideSnackBar(true);
  }


  return (
    <div>
      <Button handleClick={handleShowSnackBar}>Show snackbar</Button>
      <Snackbar hide={hideSnackBar} handleClose={handleHideSnackBar} position="top-right" type="error">This is your customizable snackbar</Snackbar>
    </div>
  );
}

export default Excersise2;