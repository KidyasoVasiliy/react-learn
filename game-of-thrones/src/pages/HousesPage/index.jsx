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

class HousesPage extends Component {
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
      <ItemList itemSelect={this.onItemSelect} getData={this.gotService.getAllHouses} />
    );

    const itemDetails = (
      <ItemDetails itemId={itemId} getData={this.gotService.getHouse} notify="Выберите дом">
        <Field label="Name" field="name" />
        <Field label="Region" field="region" />
        <Field label="Words" field="words" />
        <Field label="Titles" field="titles" />
        <Field label="Overlord" field="overlord" />
        <Field label="AncestralWeapons" field="ancestralWeapons" />
      </ItemDetails>
    );

    return (
      <Grid left={itemList} right={itemDetails} />
    );
  }
}

export default WithDidCatch(HousesPage);
