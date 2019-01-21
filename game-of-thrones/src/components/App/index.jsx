import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import { Header, RandomChar, ItemList, CharDetails } from 'components';
import { GotService } from 'services/got';

class App extends Component {
  async componentDidMount() {
    const got = new GotService();

    const characters = await got.characters();
    const character = await got.character(10);
    const books = await got.books();
    const book = await got.book(10);
    const houses = await got.houses();
    const house = await got.house(10);

    const data = {
      characters,
      character,
      books,
      book,
      houses,
      house,
    };
    console.log(data);
  }

  render() {
    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              <RandomChar />
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <ItemList />
            </Col>
            <Col md="6">
              <CharDetails />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
