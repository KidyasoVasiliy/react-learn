import React, { Component } from 'react';
import { WithDidCatch } from 'hoc';
import {
  ItemDetails,
  Error,
  Field,
} from 'components';
import { GotService } from 'services/got';

class CharacterPage extends Component {
  gotService = new GotService();

  state = {
    itemId: 583,
  };

  componentDidMount() {
    this.randomId();
    this.timerId = setInterval(() => this.randomId(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  randomId = () => {
    const itemId = Math.floor(Math.random() * 140 + 25);
    this.setState({ itemId });
  }

  render() {
    // console.log('render');
    const { error, itemId } = this.state;
    if (error) return <Error />;

    return (
      <ItemDetails itemId={itemId} getData={this.gotService.getCharacter} notify="">
        <Field label="Name" field="name" />
        <Field label="Gender" field="gender" />
        <Field label="Born" field="born" />
        <Field label="Died" field="died" />
        <Field label="Culture" field="culture" />
      </ItemDetails>
    );
  }
}

export default WithDidCatch(CharacterPage);
