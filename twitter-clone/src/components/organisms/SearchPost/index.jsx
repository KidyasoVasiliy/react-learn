import React, { Component } from 'react';
import { Input } from 'components/atoms';
import './style.css';

export class SearchPost extends Component {
  state = {
    term: '',
  }

  handleUpdateSearch = ({ target: { value } }) => {
    const { onUpdateSearch } = this.props;
    const term = value;
    this.setState({ term });
    onUpdateSearch(term);
  }

  render() {
    const { term } = this.state;

    return (
      <Input
        type="text"
        className="form-control search-input"
        placeholder="Поиск по записям"
        value={term}
        onChange={this.handleUpdateSearch}
      />
    );
  }
}
