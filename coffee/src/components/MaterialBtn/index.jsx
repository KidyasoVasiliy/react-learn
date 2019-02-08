import React from 'react';

import './styles.css';

export const MaterialBtn = ({ title, handleClick }) => (
  <button
    className="button"
    onClick={handleClick}
    type="button"
  >
    {title}
  </button>
);
