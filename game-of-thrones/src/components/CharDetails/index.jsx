import React, { Component } from 'react';
import { GotService } from 'services/got'; // eslint-disable-line
import './style.css';
import { Error, Spinner } from 'components'; // eslint-disable-line

export class CharDetails extends Component {
  gotService = new GotService();

  state = {
    error: false,
    loading: true,
    message: '',
    name: null,
    gender: null,
    born: null,
    died: null,
    culture: null,
  }

  componentDidMount() {
    this.updateChar();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.charId !== this.props.charId) { // eslint-disable-line
      this.updateChar();
    }
  }

  onCharLoaded = (data) => {
    this.setState(data);
  }

  onError = (message) => {
    this.setState({
      message,
      error: true,
      loading: false,
    });
  }

  async updateChar() {
    const { charId } = this.props;
    if (!charId) {
      const message = 'Выберети героя';
      this.onCharLoaded({ message, loading: false });
      return;
    }

    try {
      const data = await this.gotService.getCharacter(charId);
      const message = '';
      this.onCharLoaded({ ...data, message, loading: false });
    } catch (err) {
      this.onError(err.message);
    }
  }

  renderError = () => {
    const { message } = this.state;

    return (
      <div className="char-details rounded">
        <Error message={message} />
      </div>
    );
  }

  renderSpinner = () => {
    return (
      <div className="char-details rounded d-flex justify-content-center align-items-center">
        <Spinner />
      </div>
    );
  }

  renderView() {
    const {
      name,
      gender,
      born,
      died,
      culture,
    } = this.state;

    return (
      <div className="char-details rounded">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Born</span>
            <span>{born}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Died</span>
            <span>{died}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Culture</span>
            <span>{culture}</span>
          </li>
        </ul>
      </div>
    );
  }

  renderMessage = () => {
    const { message } = this.state;
    return (
      <div className="char-details rounded">
        <h4>{message}</h4>
      </div>
    );
  }

  render() {
    const { error, loading, message } = this.state;
    if (loading) return this.renderSpinner();
    if (error) return this.renderError();
    if (message) return this.renderMessage();
    return this.renderView();
  }
}
