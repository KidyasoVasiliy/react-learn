import React, { Component } from 'react';
import idGenerator from 'react-id-generator';

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: data,
    };
  }

  handleDeletePost = (id) => {
    const { posts: oldPosts } = this.state;
    const posts = oldPosts.filter(post => post.id !== id);
    this.setState({ posts });
  }

  handleAddPost = (e, post) => {
    e.preventDefault();
    const generatedId = idGenerator();

    const newPost = {
      id: generatedId,
      label: post,
      important: false,
    };

    const { posts: oldPosts } = this.state;
    const posts = [...oldPosts, newPost];
    this.setState({ posts });
  };

  render() {
    const { posts } = this.state;

    console.info('App render');

    return (
      <div className="app">
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={posts} handleDeletePost={this.handleDeletePost} />
        <PostAddForm handleAddPost={this.handleAddPost} />
      </div>
    );
  }
}

export default App;
