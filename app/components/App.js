import React from 'react';
import axios from 'axios';

import NewsList from './NewsList';
import Header from './Header';
import Topics from './Topics';
import AddSource from './AddSource';
import SelectedSources from './SelectedSources';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mostPopular: true,
      articles: [],
      selectedSources: [],
    };

    this.onRefreshClick = this.onRefreshClick.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAddSource = this.onAddSource.bind(this);
  }

  componentDidMount() {
    const options = {
      topic: null,
      source: null,
      sortBy: null,
      topHeadlines: true,
    };
    this.getArticles(options);
  }

  onRefreshClick() {
    // trigger get request to server '/load' route
  }

  onToggleClick() {
    this.setState({ mostPopular: !this.state.mostPopular });
    // trigger get request to server to '/popular' or '/recent' routes as necessary
  }

  onAddSource(source) {
    this.setState((state) => { return { selectedSources: state.selectedSources.concat([source]) }; });
  }

  getArticles(options) {
    axios
      .get('/articles', {
        params: options,
      })
      .then((newsArticles) => {
        console.log('returned articles: ', newsArticles);
        this.setState({ articles: newsArticles.data });
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }

  render() {
    return (
      <div>
        <Header onRefreshClick={this.onRefreshClick} onToggleClick={this.onToggleClick} mostPopular={this.state.mostPopular} />
        <Topics className="topics" />
        <AddSource onAddSource={this.onAddSource} />
        <SelectedSources selectedSources={this.state.selectedSources} />
        <NewsList newsArticles={this.state.articles} />
      </div>
    );
  }
}

export default App;
