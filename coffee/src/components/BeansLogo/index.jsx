import React from 'react';

import './styles.css';

export const BeansLogo = ({ tintColor }) => (
  <div className="beans-logo">
    <div className={`pseudo ${tintColor}`} />
    <div className={`mask ${tintColor}`} />
  </div>
);
