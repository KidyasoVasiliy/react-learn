import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import {
  Header,
  RandomChar,
  CharacterPage,
} from 'components'; // eslint-disable-line

class App extends Component {
  state = {
    visible: true,
  };

  toogleContent = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  }


  render() {
    const { visible } = this.state;
    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              {visible && <RandomChar />}
              <button
                type="button"
                className="btn btn-info m-4"
                onClick={this.toogleContent}
              >
                TOOGLE
              </button>
            </Col>
          </Row>
          <CharacterPage />
        </Container>
      </>
    );
  }
}

export default App;
