import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { WithDidCatch } from 'hoc';
import {
  ItemList,
} from 'components';
import { GotService } from 'services/got';

class BooksPage extends Component {
  gotService = new GotService();

  onItemSelect = (id) => {
    const { history } = this.props;
    history.push(id);
  }

  render() {
    return (
      <ItemList itemSelect={this.onItemSelect} getData={this.gotService.getAllBooks} />
    );
  }
}

export default withRouter(WithDidCatch(BooksPage));
