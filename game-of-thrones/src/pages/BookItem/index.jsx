import React, { Component } from 'react';
import { WithDidCatch } from 'hoc';
import {
  ItemDetails,
  Field,
} from 'components';
import { GotService } from 'services/got';

class BookItem extends Component {
  gotService = new GotService();

  render() {
    const { itemId } = this.props;

    return (
      <ItemDetails itemId={itemId} getData={this.gotService.getBook}>
        <Field label="Name" field="name" />
        <Field label="NumberofPages" field="numberofPages" />
        <Field label="Publisher" field="publisher" />
        <Field label="Released" field="released" />
      </ItemDetails>
    );
  }
}

export default WithDidCatch(BookItem);
