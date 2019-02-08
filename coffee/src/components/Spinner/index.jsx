import React from 'react';

import './styles.css';

export const Spinner = () => {
  const size = { width: '100%', height: '100%' };
  return (
    <div className="spinner-root">
      <div className="lds-css ng-scope">
        <div style={size} className="lds-eclipse">
          <div />
        </div>
      </div>
    </div>
  );
};
