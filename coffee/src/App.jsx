import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { Menu, Footer } from './components';
import { HomePage, OurCoffee, Pleasure } from './containers';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="header">
            <Menu tintColor="white"/>
          </div>

          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/our-coffee" exact component={OurCoffee} />
            {/* TODO: add container on ID */}
            <Route path="/our-coffee/:id" component={OurCoffee} />
            <Route path="/for-your-pleasure" component={Pleasure} />
            <Redirect to="/" exact />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
