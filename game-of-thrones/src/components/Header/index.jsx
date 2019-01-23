import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Header = () => {
  return (
    <div className="header-block">
      <h3 className="header-title">
        <Link to="/">Game of Thrones DB</Link>
      </h3>
      <ul className="header-links">
        <li className="header-list">
          <Link to="/characters/">Characters</Link>
        </li>
        <li className="header-list">
          <Link to="/houses/">Houses</Link>
        </li>
        <li className="header-list">
          <Link to="/books/">Books</Link>
        </li>
      </ul>
    </div>
  );
};
