import React, { Component } from 'react';
import './style.css';
import { GotService } from 'services/got';
import { Spinner, Error } from 'components';
export class RandomChar extends Component {
  gotService = new GotService();

  state = {
    visible: true,
    error: false,
    loading: true,
    name: null,
    gender: null,
    born: null,
    died: null,
    culture: null,
  };

  componentDidMount() {
    return this.updateChar();
  }
  toogleContent = () => {
    this.setState(({ visible: !this.state.visible }))
  }

  withToogle(elem) {
    const { visible } = this.state;
    const content = visible && elem;
    return (
      <>
        {content}
        <button
          className="btn btn-info m-4"
          onClick={this.toogleContent}
        >
          TOOGLE
        </button>
      </>
    )
  }
  render() {
    const { loading, error } = this.state;

    if (error) return this.withToogle(this.renderError())

    if (loading) return this.withToogle(this.renderSpinner())

    return this.withToogle(this.renderView())
  }

  renderError() {
    const { message } = this.state;
    return (
      <div className="random-block rounded d-flex justify-content-center align-items-center">
        <Error message={message}/>
      </div>
    );
  }

  renderSpinner() {
    return (
      <div className="random-block rounded d-flex justify-content-center align-items-center">
        <Spinner />
      </div>
    );
  }

  renderView() {
    const { name, gender, born, died, culture } = this.state;

    return (
      <div className="random-block rounded">
        <h4>Random Character: {name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Gender </span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Born </span>
            <span>{born}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Died </span>
            <span>{died}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Culture </span>
            <span>{culture}</span>
          </li>
        </ul>
      </div>
    );
  }

  onCharLoaded = data => {
    this.setState(data);
  };

  async updateChar() {
    const id = Math.floor(Math.random() * 140 + 25);
    try {
      const data = await this.gotService.getCharacter(id);
      this.onCharLoaded({ ...data, loading: false });
    } catch (e) {
      console.dir(e)
      this.onError(e.message);
    }
  }

  onError = (message) => {
    this.setState({
      message,
      error: true,
      loading: false,
    });
  };
}
