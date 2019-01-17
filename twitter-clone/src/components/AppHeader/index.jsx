import React from 'react';

import './style.css';

export const AppHeader = ({
  numberOfLike,
  numberOfPosts,
}) => {
  const text = `${numberOfPosts} записей понравилось из ${numberOfLike}`;

  return (
    <div className="app-header d-flex">
      <h1>Лента</h1>
      <h2>{text}</h2>
    </div>
  );
};
