import React, { useEffect } from 'react';

import './index.css';

function Snackbar({ children, hide, handleClose, autoHideDuration = '5000', position = 'bottom-center', type = 'error' }) {
  useEffect(() => {
    console.log('1');
    let timeout;
    if (!hide) {
      timeout = setTimeout(() => {
        handleClose();
        console.log('hihiihih');
      }, autoHideDuration);
    }
    return () => clearTimeout(timeout);
  }, [hide, handleClose, autoHideDuration]);

  const snackClass = `snackbar ${position} ${type}`;

  return (
    <>
      {
        !hide &&
        <div className={snackClass}>
          <span>
            {children}
          </span>
          <button onClick={handleClose}>X</button>
        </div>
      }
    </>
  );
}


export default Snackbar;