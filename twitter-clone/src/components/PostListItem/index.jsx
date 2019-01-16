import React from 'react';

import './style.css';

export const PostListItem = () => {
  return (
    <li className="app-list-item d-flex justify-content-between">
      <span className="app-list-item-label">He</span>

      <div className="d-flex justify-content-center align-items-center">
        <button className="btn-star btn-sm" type="button">
          <i className="fa fa-star" />
        </button>
        <button className="btn-trash btn-sm" type="button">
          <i className="fa fa-trash" />
        </button>
        <i className="fa fa-heart" />
      </div>
    </li>
  );
};
