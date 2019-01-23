import React, { Component } from 'react';
import { Spinner, Error } from 'components';
import './style.css';

export class ItemList extends Component {
  state = {
    error: false,
    loading: true,
    message: '',
    items: null,
  };

  componentDidMount() {
    this.fetchData();
  }

  onError = (message) => {
    this.setState({
      message,
      error: true,
      loading: false,
    });
  };

  fetchData = async () => {
    const { getData } = this.props;

    try {
      const items = await getData();
      this.setState({
        items,
        loading: false,
      });
    } catch (err) {
      this.onError(err.message);
    }
  }

  render() {
    const { error, loading, message } = this.state;

    if (loading) return <Spinner />;
    if (error) return <Error message={message} />;

    const { items } = this.state;
    const { itemSelect } = this.props;

    return (
      <ul className="item-list list-group">
        {items.map(({ name, id }) => (
          <li
            key={id}
            className="list-group-item"
            onClick={() => itemSelect(id)}
          >
            {name}
          </li>
        ))}
      </ul>
    );
  }
}
