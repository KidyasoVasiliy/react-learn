import React from 'react';

import { PostListItem } from 'components';

import './style.css';

export const PostList = () => {
  return (
    <ul className="app-list list-group">
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </ul>
  );
};
