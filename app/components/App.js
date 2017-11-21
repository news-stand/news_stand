import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            path="/login"
            component={Login}
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
