import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line
import { PostListItem } from 'components';

// import './style.css';

/**
 * Component Styled Components library (CSS in JS)
 */
const Ul = styled.ul`
  margin-top: 50px;
  padding: 0;
`;

const Li = styled.li`
  padding: 20px 35px 10px 35px;
  margin-top: 10px;
`;

export const PostList = ({ posts, handleDeletePost }) => {
  // console.log(posts)
  const elements = posts.map((post) => {
    if (post instanceof Object) {
      const { id, ...itemProps } = post;
      const onDelete = () => handleDeletePost(id);

      return (
        <Li key={id} className="list-group-item">
          <PostListItem {...itemProps} handleDeletePost={onDelete} />
        </Li>
      );
    }

    return null;
  });

  return <Ul>{elements}</Ul>;
};
