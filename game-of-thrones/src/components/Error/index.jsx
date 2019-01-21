import React from 'react';
import './style.css';

export const Error = ({message}) => {
  return (
    <div className="error">
      <img
        src={process.env.PUBLIC_URL + '/img/error.jpg'}
        alt="error"
        className="error-img"/>
      <span>{message}</span>
    </div>
  );
};
