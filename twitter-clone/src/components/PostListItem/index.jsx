import React, { Component } from 'react';

import './style.css';

export class PostListItem extends Component {
  state = {
    important: false,
    like: false,
  };

  isImportant = () => {
    this.setState(({ important }) => ({
      important: !important,
    }));
  };

  isLike = () => {
    this.setState(({ like }) => ({
      like: !like,
    }));
  };

  render() {
    const { label, handleDeletePost } = this.props;
    const { important, like } = this.state;

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
          onMouseDown={this.isLike}
          role="presentation"
        >
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-star btn-sm"
            onClick={this.isImportant}
          >
            <i className="fa fa-star" />
          </button>
          <button
            className="btn-trash btn-sm"
            type="button"
            onClick={handleDeletePost}
          >
            <i className="fa fa-trash" />
          </button>
          <i className="fa fa-heart" />
        </div>
      </div>
    );
  }
}
