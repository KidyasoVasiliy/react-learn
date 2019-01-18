import React from 'react';
import { Home } from 'containers/Home';
import {
  Add,
  Filter,
  Search,
  List,
  Header,
} from 'components/organisms';

import './style.css';

import data from 'data/posts.json';

const HomePage = ({
  numberOfLike,
  numberOfPosts,
  hundleUpdateSearch,
  filter,
  hundleFilterSelect,
  visiblePosts,
  handleDeletePost,
  handleToggleImportant,
  handleToggleLiked,
  handleAddPost,
}) => (
  <div className="app">
    <Header
      numberOfLike={numberOfLike}
      numberOfPosts={numberOfPosts}
    />
    <div className="search-panel d-flex">
      <Search onUpdateSearch={hundleUpdateSearch} />
      <Filter
        filter={filter}
        hundleFilterSelect={hundleFilterSelect}
      />
    </div>
    <List
      posts={visiblePosts}
      handleDeletePost={handleDeletePost}
      handleToggleImportant={handleToggleImportant}
      handleToggleLiked={handleToggleLiked}
    />
    <Add handleAddPost={handleAddPost} />
  </div>
);

export default Home(HomePage, data);
