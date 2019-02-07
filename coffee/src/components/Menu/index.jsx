import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export const Menu = ({ tintColor }) => (
  <nav className={`nav ${tintColor}`}>
    <Link className="nav__link" to="/">Coffee house</Link>
    <Link className="nav__link" to="/our-coffee">Our coffee</Link>
    <Link className="nav__link" to="/for-your-pleasure">For your pleasure</Link>
  </nav>
);
