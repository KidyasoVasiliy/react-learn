import React from 'react';

import {
  AppHeader,
  SearchPanel,
  PostStatusFilter,
  PostList,
  PostAddForm,
  // eslint-disable-next-line
} from 'components';

import './style.css';
import data from './data';

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  );
};

export default App;
