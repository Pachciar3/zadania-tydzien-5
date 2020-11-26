import React from 'react';

import './index.css';

function Button({ children, type, handleClick }) {
  return (
    <button type={type} className="button" onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
