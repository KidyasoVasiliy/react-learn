import React from 'react';
import { Input as UIInput } from 'reactstrap';

/**
 * Input atom component
 * @param {string} type
 * @param {string} placeholder
 * @param {string} className
 * @param {string|number} value
 * @param {function} onChange
 */
export const Input = props => <UIInput {...props} />;
