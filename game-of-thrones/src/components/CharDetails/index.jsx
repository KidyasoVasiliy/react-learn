import React, { Component } from 'react';
import { GotService } from 'services/got';
import './style.css';
import { Error, Spinner } from 'components';

export class CharDetails extends Component {

  gotService = new GotService();

  state = {
    error: false,
    loading: true,
    name: null,
    gender: null,
    born: null,
    died: null,
    culture: null,
  }

  componentDidMount() {
    this.updateChar()
  }

  render() {
    const { error, loading } = this.state;
    if (loading) return this.renderSpinner();
    if (error) return this.renderError();

    return this.renderView();
  }

  renderError() {
    const { message } = this.state;
    return (
      <div className="char-details rounded">
        <Error message={message} />
      </div>
    )
  }

  renderSpinner() {
    return (
      <div className="char-details rounded d-flex justify-content-center align-items-center">
        <Spinner />
      </div>
    )
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

  onCharLoaded = (data) => {
    this.setState(data);
  }

  async updateChar() {
    const id = 583;
    try {
      const data = await this.gotService.getCharacter(id);
      this.onCharLoaded({...data, loading: false });
    } catch (err) {
      this.onError(err.message);
    }
  }

  onError(message) {
    this.setState({
      message,
      error: true,
      loading: false,
    })
  }
}
