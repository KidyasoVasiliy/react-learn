import React from 'react';

import './styles.css';

export const Heading = ({ text, color = 'black' }) => (
  <h3 className={`headign ${color}`}>{text}</h3>
);
