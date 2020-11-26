import React, { useState } from 'react';

import { Dialog, DialogTitle, DialogContent, DialogActions } from '../components/Dialog';
import Button from '../components/Button';

function Excersise1() {
  const [showDialog, setShowDialog] = useState(false);
  const [showDialogWithConfirmation, setShowDialogWithConfirmation] = useState(false);

  function handleOpenDialogClick() {
    setShowDialog(true);
    document.body.style.overflow = "hidden";
  }

  function handleCloseDialog() {
    setShowDialog(false);
    document.body.style.overflow = "initial";
  }

  function handleOpenDialogWithConfirmationClick() {
    setShowDialogWithConfirmation(true);
    document.body.style.overflow = "hidden";
  }

  function handleCloseDialogWithConfirmation() {
    setShowDialogWithConfirmation(false);
    document.body.style.overflow = "initial";
  }

  function handleDialogConfirmClick() {
    console.log('confirm');
    handleCloseDialogWithConfirmation();
  }

  function handleDialogAbortClick() {
    console.log('abort');
    handleCloseDialogWithConfirmation();
  }

  return (
    <div>
      <Button type="button" handleClick={handleOpenDialogClick}>Show Dialog</Button>
      {/*TODO: Add close button to component ?*/}
      <Button type="button" handleClick={handleOpenDialogWithConfirmationClick}>Show Dialog with confirmation</Button>

      <Dialog open={showDialog} handleClose={handleCloseDialog}>
        <DialogTitle>
          <h3>This is a simple dialog</h3>
          <Button type="button" handleClick={handleCloseDialog}>X</Button>
        </DialogTitle>
        <DialogContent>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </DialogContent>
        <DialogActions>
          <Button type="button" handleClick={handleCloseDialog}>Ok</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={showDialogWithConfirmation} handleClose={handleCloseDialogWithConfirmation}>
        <DialogTitle>
          <h3>This is a simple dialog with confirmation</h3>
          <Button type="button" handleClick={handleCloseDialogWithConfirmation}>X</Button>
        </DialogTitle>
        <DialogContent>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </DialogContent>
        <DialogActions>
          <Button type="button" handleClick={handleDialogConfirmClick}>Confirm</Button>
          <Button type="button" handleClick={handleDialogAbortClick}>Abort</Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}

export default Excersise1;
