import React from 'react';

import { Menu, BeansLogo } from '../index';

import './styles.css';

export const Footer = () => (
  <div className="footer">
    <div className="footer__item">
      <Menu tintColor="black"/>
    </div>
    <div className="footer__item">
      <BeansLogo tintColor="black"/>
    </div>
  </div>
);
