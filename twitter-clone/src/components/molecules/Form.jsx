import React from 'react';
import { Form as UIFrom } from 'reactstrap';

/**
 * From molecule component
 * @param {JSX.Element} children
 * @param {array} otherProps
 */
export const Form = ({ children, ...otherProps }) => (
  <UIFrom {...otherProps}>{children}</UIFrom>
);
