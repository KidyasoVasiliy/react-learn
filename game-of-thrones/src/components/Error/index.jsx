import React from 'react';
import './style.css';

export const Error = ({ message }) => {
  const image = `${process.env.PUBLIC_URL}/img/error.jpg`;
  return (
    <div className="random-block rounded d-flex justify-content-center align-items-center">
      <div className="error">
        <img
          src={image}
          alt="error"
          className="error-img"
        />
        {message && <span>{message}</span>}
      </div>
    </div>
  );
};
