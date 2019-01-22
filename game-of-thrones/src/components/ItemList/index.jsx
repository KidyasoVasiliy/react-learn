import React, { Component } from 'react';
import { GotService } from 'services/got'; // eslint-disable-line
import { Spinner, Error } from 'components'; // eslint-disable-line
import './style.css';

export class ItemList extends Component {
  gotService = new GotService();

  state = {
    error: false,
    loading: true,
    message: '',
    charList: null,
  };

  componentDidMount() {
    this.updateChar();
  }

  renderError = () => {
    const { message } = this.state;

    return (
      <ul className="item-list list-group">
        <Error message={message} />
      </ul>
    );
  }

  renderLoading = () => {
    return (
      <ul className="item-list list-group d-flex justify-content-center align-items-center">
        <Spinner />
      </ul>
    );
  }

  onError = (message) => {
    this.setState({
      message,
      error: true,
      loading: false,
    });
  };

  updateChar = async () => {
    try {
      const charList = await this.gotService.getAllCharacters();
      this.setState(() => ({
        charList,
        loading: false,
      }));
    } catch (err) {
      this.onError(err.message);
    }
  }

  renderView() {
    const { charList } = this.state;
    const { charSelect } = this.props;
    return (
      <ul className="item-list list-group">
        {charList.map(({ name, url }, index) => (
          <li
            key={url}
            className="list-group-item"
            onClick={() => charSelect(41 + index)}
          >
            {name}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    this.foo();
    const { error, loading } = this.state;

    if (loading) return this.renderLoading();
    if (error) return this.renderError();
    return this.renderView();
  }
}
