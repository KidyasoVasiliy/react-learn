import React, { Component } from 'react';
import idGenerator from 'react-id-generator';

export function Home(WrappedComponent, selectData) {
  return class extends Component {
    state = {
      posts: '',
      term: '',
      filter: 'all',
    };

    componentDidMount() {
      if (selectData) this.setState({ posts: selectData });

      // const { data } = this.props;
      // this.setState({ posts: data });
    }

    filterPost = (posts, filter) => {
      if (filter === 'like') {
        return posts.filter(post => post.like);
      }

      return posts;
    }

    hundleFilterSelect = (filter) => {
      this.setState({ filter });
    }

    searchPosts = (posts, term) => {
      if (term.length === 0) {
        return posts;
      }

      return posts.filter((post) => {
        if (post instanceof Object) {
          return post.label.toLowerCase().indexOf(term) > -1;
        }
        return null;
      });
    }

    hundleUpdateSearch = (term) => {
      this.setState({ term });
    }

    handleDeletePost = (id) => {
      const { posts: oldPosts } = this.state;
      const posts = oldPosts.filter(post => post.id !== id);
      this.setState({ posts });
    }

    handleAddPost = (post) => {
      const generatedId = idGenerator();

      const newPost = {
        id: generatedId,
        label: post,
        important: false,
      };

      const { posts: oldPosts } = this.state;
      const posts = [...oldPosts, newPost];
      this.setState({ posts });
    }

    handleToggleImportant = (id) => {
      this.toggler('important', id);
    }

    handleToggleLiked = (id) => {
      this.toggler('like', id);
    }

    toggler = (key, id) => {
      const { posts: oldPosts } = this.state;
      const indexPost = oldPosts.findIndex(post => post.id === id);
      const oldPost = oldPosts[indexPost];
      const post = { ...oldPost, [key]: !oldPost[key] };
      const posts = [
        ...oldPosts.slice(0, indexPost),
        post,
        ...oldPosts.slice(indexPost + 1),
      ];
      this.setState({ posts });
    }

    render() {
      const { posts, term, filter } = this.state;

      // while is loading data
      if (!posts) return <h1>Hello</h1>;

      const numberOfLike = posts.filter(post => post.like).length;
      const numberOfPosts = posts.length;
      const visiblePosts = this.filterPost(this.searchPosts(posts, term), filter);
      console.info('App render');

      return (
        <WrappedComponent
          numberOfLike={numberOfLike}
          numberOfPosts={numberOfPosts}
          hundleUpdateSearch={this.hundleUpdateSearch}
          filter={filter}
          hundleFilterSelect={this.hundleFilterSelect}
          visiblePosts={visiblePosts}
          handleDeletePost={this.handleDeletePost}
          handleToggleImportant={this.handleToggleImportant}
          handleToggleLiked={this.handleToggleLiked}
          handleAddPost={this.handleAddPost}
          {...this.props}
        />
      );
    }
  };
}

/*

const mapStateToProps = ({ posts: { data } }) => ({ data });

const mapDispatchToProps = { handleAddPost, ... }

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Home);

 */
