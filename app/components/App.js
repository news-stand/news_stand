import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

import search from './helpers/search';
import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';
import Profile from './Profile';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {

  }


  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home search={search} />}
          />
          <Route
            path="/login"
            component={Login}
          />
          <Route
            path="/profile"
            component={test}
          />
          <Route
            component={NotFound}
          />
          {/* Will want to add signup component */}
        </Switch>
      </Router>
    );
  }
}

export default App;
