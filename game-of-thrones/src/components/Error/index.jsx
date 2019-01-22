import React from 'react';
import './style.css';

export const Error = ({ message }) => {
  const image = `${process.env.PUBLIC_URL}/img/error.jpg`;
  return (
    <div className="error">
      <img
        src={image}
        alt="error"
        className="error-img"
      />
      <span>{message}</span>
    </div>
  );
};
