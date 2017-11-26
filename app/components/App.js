import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

import search from './helpers/search';
import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';
import Profile from './Profile';
import getPreferences from './helpers/getPreferences';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      user: {},
    };
  }

  componentDidMount() {
    axios.get('/auth')
      .then((authStatus) => {
        this.setState({
          loggedIn: authStatus.data.loggedIn,
          user: authStatus.data.user,
        });
      })
      .catch((err) => {
        throw err;
      });
  }


  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home search={search} getPreferences={getPreferences} />}
          />
          <Route
            path="/login"
            component={Login}
          />
          <Route
            path="/profile"
            render={() => (
            this.state.loggedIn ? (
              <Profile user={this.state.user} />
            ) : (
              <Redirect to="/" />
              )
          )}
          />
          <Route
            component={NotFound}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
