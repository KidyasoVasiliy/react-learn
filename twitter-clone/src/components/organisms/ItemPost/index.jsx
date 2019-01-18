import React from 'react';
import { Button } from 'components/atoms';
import './style.css';

export const ItemPost = ({
  label,
  important,
  like,
  handleDeletePost,
  handleToggleImportant,
  handleToggleLiked,
}) => {
  const classNames = {
    default: 'app-list-item d-flex justify-content-between',
    important: important ? ' important' : '',
    like: like ? ' like' : '',
  };

  const rootClassNames = classNames.default.concat(
    classNames.important,
    classNames.like,
  );

  return (
    <div className={rootClassNames}>
      <span
        className="app-list-item-label"
        onMouseDown={handleToggleLiked}
        role="presentation"
      >
        {label}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <Button
          type="button"
          className="btn-star btn-sm"
          onClick={handleToggleImportant}
        >
          <i className="fa fa-star" />
        </Button>
        <Button
          className="btn-trash btn-sm"
          type="button"
          onClick={handleDeletePost}
        >
          <i className="fa fa-trash" />
        </Button>
        <i className="fa fa-heart" />
      </div>
    </div>
  );
};
