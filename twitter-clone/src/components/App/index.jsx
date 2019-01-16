import React from 'react';

import {
  AppHeader,
  SearchPanel,
  PostStatusFilter,
  PostList,
  PostAddForm,
} from 'components';

import './style.css';

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList />
      <PostAddForm />
    </div>
  );
};

export default App;
