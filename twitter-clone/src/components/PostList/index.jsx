import React from 'react';

// eslint-disable-next-line
import { PostListItem } from 'components';

import './style.css';

export const PostList = ({ posts }) => {
  // console.log(posts)
  const elements = posts.map((post) => {
    if (post instanceof Object) {
      const { id, ...itemProps } = post;

      return (
        <li key={id} className="list-group-item">
          <PostListItem {...itemProps} />
        </li>
      );
    }

    return null;
  });

  return <ul className="app-list list-group">{elements}</ul>;
};
