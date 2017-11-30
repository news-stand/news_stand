import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
      favorites: [],
    };

    this.onClickAddToFavorites = this.onClickAddToFavorites.bind(this);
  }

  componentDidMount() {
    axios.get('/auth')
      .then((authStatus) => {
        this.setState({
          loggedIn: authStatus.data.loggedIn,
          user: authStatus.data.user,
          favorites: authStatus.data.user.articles,
        });

      })
      .catch((err) => {
        throw err;
      });
  }

  onClickAddToFavorites(article) {
    this.state.favorites.push(article);
    this.setState({
      favorites: this.state.favorites,
    });
  }


  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                search={search}
                getPreferences={getPreferences}
                user={this.state.user}
                loggedIn={this.state.loggedIn}
              />
            )}
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
