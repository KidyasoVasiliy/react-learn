import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import {
  ItemList,
  CharDetails,
  Error,
} from 'components'; // eslint-disable-line


export class CharacterPage extends Component {
  state = {
    error: false,
    charId: null,
  };

  onCharSelect = (charId) => {
    this.setState({ charId });
  }

  componentDidCatch() {
    this.setState({ error: true });
  }


  render() {
    const { error, charId } = this.state;

    if (error) return <Error />;

    return (
      <Row>
        <Col md="6">
          <ItemList charSelect={this.onCharSelect} />
        </Col>
        <Col md="6">
          <CharDetails charId={charId} />
        </Col>
      </Row>
    );
  }
}
