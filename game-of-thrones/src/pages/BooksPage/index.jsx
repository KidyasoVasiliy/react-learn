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

class BooksPage extends Component {
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
      <ItemList itemSelect={this.onItemSelect} getData={this.gotService.getAllBooks} />
    );

    const itemDetails = (
      <ItemDetails itemId={itemId} getData={this.gotService.getBook} notify="Выберите книгу">
        <Field label="Name" field="name" />
        <Field label="NumberofPages" field="numberofPages" />
        <Field label="Publisher" field="publisher" />
        <Field label="Released" field="released" />
      </ItemDetails>
    );

    return (
      <Grid left={itemList} right={itemDetails} />
    );
  }
}

export default WithDidCatch(BooksPage);
