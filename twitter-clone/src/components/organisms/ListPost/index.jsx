import React from 'react';
import { Item } from 'components/organisms';
import './style.css';

export const ListPost = ({
  posts,
  handleDeletePost,
  handleToggleImportant,
  handleToggleLiked,
}) => {
  const elements = posts.map((post) => {
    if (post instanceof Object) {
      const { id, ...itemProps } = post;
      const onDelete = () => handleDeletePost(id);
      const onToggleImportant = () => handleToggleImportant(id);
      const onToggleLiked = () => handleToggleLiked(id);
      return (
        <li key={id} className="list-group-item">
          <Item
            {...itemProps}
            handleDeletePost={onDelete}
            handleToggleImportant={onToggleImportant}
            handleToggleLiked={onToggleLiked}
          />
        </li>
      );
    }

    return null;
  });

  return <ul className="app-list">{elements}</ul>;
};
