import React from 'react';

function Dialog({ children, handleClose, open }) {
  return (
    <>
      {
        open &&
        <div className="dialog-container">
          <div className="dialog-closer" onClick={handleClose}></div>
          <div className="dialog">
            {children}
          </div>
        </div>
      }
    </>
  );
}

export default Dialog;
