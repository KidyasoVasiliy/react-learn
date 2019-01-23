import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import { Col, Row, Container, Button, Alert } from 'reactstrap';
import {
  HomePage,
  CharactersPage,
  BooksPage,
  HousesPage,
  RandomRage,
  BookItem,
} from 'pages';
import { Header } from 'components';

class App extends Component {
  state = {
    visibleRandomChar: true,
  }

  toogleContent = () => {
    const { visibleRandomChar } = this.state;
    this.setState({ visibleRandomChar: !visibleRandomChar });
  }

  renderBookItem = ({ match }) => {
    const { id } = match.params;
    return <BookItem itemId={id} />;
  }

  render() {
    const { visibleRandomChar } = this.state;

    return (
      <Router>
        <div className="app">
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
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/characters" component={CharactersPage} />
              <Route path="/houses" component={HousesPage} />
              <Route path="/books" exact component={BooksPage} />
              <Route path="/books/:id" render={this.renderBookItem} />
              <Route path="/404" exact render={this.renderAlert} />
              <Redirect to="/404" />
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }

  renderAlert = () => (
    <>
      <Alert color="danger">Страница не найдена</Alert>
      <Button color="danger">
        <Link to="/">Вернутся домой</Link>
      </Button>
    </>
  )
}

export default App;
