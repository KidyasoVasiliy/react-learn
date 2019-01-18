import React from 'react';
import { Button as UIButton } from 'reactstrap';

/**
 * Button atom component
 * @param {string|JSX.Element} children
 * @param {string} type
 * @param {string} color
 * @param {function} onClick
 * @param {boolean} outline
 */
export const Button = ({ children, ...otherProps }) => (
  <UIButton color="" {...otherProps}>{children}</UIButton>
);
