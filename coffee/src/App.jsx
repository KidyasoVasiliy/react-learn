import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { Menu } from './components';
import { Footer } from './blocks';

import {
  Home,
  OurCoffee,
  Pleasure,
  CoffeeItem,
} from './pages';

const App = () => (
  <Router>
    <div>
      <div className="header">
        <Menu tintColor="white"/>
      </div>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/our-coffee" exact component={OurCoffee} />
        <Route path="/our-coffee/:id" component={CoffeeItem} />
        <Route path="/for-your-pleasure" component={Pleasure} />
        <Redirect to="/" exact />
      </Switch>

      <Footer />
    </div>
  </Router>
);

export default App;
