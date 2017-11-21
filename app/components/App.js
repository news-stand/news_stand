import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';
// import axios from 'axios';

import NotFound from './NotFound';
import Login from './Login';
import Home from './Home';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    return (
<<<<<<< HEAD
      <div>
        <Header
          onRefreshClick={this.onRefreshClick}
          onToggleClick={this.onToggleClick}
          mostPopular={this.state.mostPopular}
        />
        {/* Space savers for the eventual 'login' and signup links we'll want to set up */}
        {/* <div id="accounts">
          <div><Link to="/signup"></Link></div>
          <div><Link to="/login">Login</Link></div>
        </div> */}

        <hr />
        <Switch>
          <Route
            exact
            path="/"
            component={() =>
              ( // Need to refactor this to be it's own 'Home' component
                <div>
                  <Topics
                    className="topics"
                    topics={this.state.topics}
                    onTopicSearch={this.onTopicSearch}
                    onTopicRemoval={this.onTopicRemoval}
                  />
                  <AddSource onAddSource={this.onAddSource} />
                  <SelectedSources selectedSources={this.state.selectedSources} />
                  <NewsList newsArticles={this.state.articles} />
                </div>
              )
            }

=======
      <Router>
        <div>
<<<<<<< HEAD
          <Header
            onRefreshClick={this.onRefreshClick}
            onToggleClick={this.onToggleClick}
            mostPopular={this.state.mostPopular}
          />
          <Topics
            className="topics"
            topics={this.state.topics}
            onTopicSearch={this.onTopicSearch}
            onTopicRemoval={this.onTopicRemoval}
>>>>>>> (bug fix) fixed '<Switch> outside of <Router> bug that was failing tests
          />
          {/* Space savers for the eventual 'login' and signup links we'll want to set up */}
          {/* <div id="accounts">
            <div><Link to="/signup"></Link></div>
            <div><Link to="/login">Login</Link></div>
          </div> */}

          <hr />
=======
>>>>>>> Moved all code from App.js to Home.js.  Next step is to figure out how to render components server-side
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
            {/* <Route path="/signup" component={Signup} /> */}
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
