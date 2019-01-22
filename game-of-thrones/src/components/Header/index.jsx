import React from 'react';

import './style.css';

export const Header = () => {
  return (
    <div className="header-block">
      <h3 className="header-title">
        <a href="/">Game of Thrones DB</a>
      </h3>
      <ul className="header-links">
        <li className="header-list">
          <a href="/">Characters</a>
        </li>
        <li className="header-list">
          <a href="/">Houses</a>
        </li>
        <li className="header-list">
          <a href="/">Books</a>
        </li>
      </ul>
    </div>
  );
};
