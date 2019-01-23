import React, { Component } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import { CharactersPage, BooksPage, HousesPage, RandomRage } from 'pages';
import { Header } from 'components';

class App extends Component {
  state = {
    visibleRandomChar: true,
  };

  toogleContent = () => {
    const { visibleRandomChar } = this.state;
    this.setState({ visibleRandomChar: !visibleRandomChar });
  };

  render() {
    const { visibleRandomChar } = this.state;

    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              {visibleRandomChar && <RandomRage />}
              <Button onClick={this.toogleContent} className="mb-4">
                Скрыть
              </Button>
            </Col>
          </Row>
          <CharactersPage />
          <hr />
          <BooksPage />
          <hr />
          <HousesPage />
        </Container>
      </>
    );
  }
}

export default App;
