import React, { Component } from 'react';
import { Error, Spinner } from 'components';
import './style.css';

export class ItemDetails extends Component {
  state = {
    error: false,
    loading: true,
    message: '',
    notify: '',
    item: null,
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    const { itemId } = this.props;
    if (prevProps.itemId !== itemId) {
      this.fetchData();
    }
  }

  onError = (message) => {
    this.setState({
      message,
      error: true,
      loading: false,
    });
  }

  fetchData = async () => {
    const { itemId, getData, notify } = this.props;

    if (!itemId) {
      this.setState({ notify, loading: false });
      return;
    }

    try {
      const item = await getData(itemId);
      this.setState({ item, notify: '', loading: false });
    } catch (err) {
      this.onError(err.message);
    }
  }

  render() {
    const { error, loading, notify, message } = this.state;

    if (loading) return <Spinner />;
    if (error) return <Error message={message} />;
    if (notify) {
      return (
        <div className="char-details rounded">
          <h4>{notify}</h4>
        </div>
      );
    }

    const { item } = this.state;
    const { name } = item;
    const { children } = this.props;

    return (
      <div className="char-details rounded">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(children, child => React.cloneElement(child, { item }))
          }
        </ul>
      </div>
    );
  }
}
