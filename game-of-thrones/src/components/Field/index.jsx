import React from 'react';

export const Field = ({ item, label, field }) => (
  <li className="list-group-item d-flex justify-content-between">
    <span className="term">{label}</span>
    <span>{item[field]}</span>
  </li>
);
