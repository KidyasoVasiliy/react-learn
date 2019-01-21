import React, { Component } from 'react';
import { GotService } from 'services/got';
import { Spinner, Error } from 'components';
import './style.css';

export class ItemList extends Component {
  gotService = new GotService();

  state = {
    error: false,
    loading: true,
    message: '',
    names: null,
  }

  componentDidMount() {
    this.updateChar();
  }

  render() {
    const { error, loading } = this.state;

    if (loading) return this.renderLoading();
    if (error) return this.renderError();
    return this.renderView();
  }

  renderError() {
    const { message } = this.state;
    return (
      <ul className="item-list list-group">
        <Error message={message} />
      </ul>
    );
  }
  renderLoading() {
    return (
      <ul className="item-list list-group d-flex justify-content-center align-items-center">
        <Spinner />
      </ul>
    );
  }
  renderView() {
    const { names } = this.state;
    return (
      <ul className="item-list list-group">
        {names.map((name, index) => (
          <li key={`${name}-${index}`} className="list-group-item">
            {name}
          </li>
        ))}
      </ul>
    );
  };

  onCharsNamesLoaded = data => {
    this.setState(data);
  }

  onError = message => {
    this.setState({
      message,
      error: true,
      loading: false,
    });
  }

  async getName(id) {
    const { name } = await this.gotService.getCharacter(id);
    return name;
  }

  async updateChar() {
    const ids = [583, 550, 344];
    const names = [];
    try {
      for (const id of ids) {
        names.push(await this.getName(id));
      }
      this.onCharsNamesLoaded({ names, loading: false });
    } catch (err) {
      this.onError(err.message);
    }
  }


}
