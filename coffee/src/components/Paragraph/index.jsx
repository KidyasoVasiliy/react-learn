import React from 'react';

import './styles.css';

export const Paragraph = ({ text, align = 'center', bold = false }) => (
  <div className={`paragraph ${align} ${bold ? 'bold' : 'normal'}`}>
    {text}
  </div>
);
