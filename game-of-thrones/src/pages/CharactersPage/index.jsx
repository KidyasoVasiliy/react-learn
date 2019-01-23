import React, { Component } from 'react';
import { WithDidCatch } from 'hoc';
import {
  ItemList,
  ItemDetails,
  Error,
  Grid,
  Field,
} from 'components';
import { GotService } from 'services/got';

class CharacterPage extends Component {
  gotService = new GotService();

  state = {
    itemId: null,
  };

  onItemSelect = (itemId) => {
    this.setState({ itemId });
  }

  render() {
    const { error, itemId } = this.state;

    if (error) return <Error />;

    const itemList = (
      <ItemList itemSelect={this.onItemSelect} getData={this.gotService.getAllCharacters} />
    );

    const itemDetails = (
      <ItemDetails itemId={itemId} getData={this.gotService.getCharacter} notify="Выберите героя">
        <Field label="Name" field="name" />
        <Field label="Gender" field="gender" />
        <Field label="Born" field="born" />
        <Field label="Died" field="died" />
        <Field label="Culture" field="culture" />
      </ItemDetails>
    );

    return (
      <Grid left={itemList} right={itemDetails} />
    );
  }
}

export default WithDidCatch(CharacterPage);
