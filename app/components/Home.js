import React from 'react';
import Topics from './Topics';
import AddSource from './AddSource';
import SelectedSources from './SelectedSources';
import NewsList from './NewsList';
import Header from './Header';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'popularity',
      articles: [],
      selectedSources: [],
      topics: [],
    };

    this.onRefreshClick = this.onRefreshClick.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAddSource = this.onAddSource.bind(this);
    this.onTopicRemoval = this.onTopicRemoval.bind(this);
    this.onTopicSearch = this.onTopicSearch.bind(this);
  }

  componentDidMount() {
    const options = {
      topics: [],
      selectedSources: [],
      sortBy: 'popularity',
    };
    this.getArticles(options);
  }

  onRefreshClick() {
    const { topics, selectedSources, sortBy } = this.state;
    const options = {
      topics, selectedSources, sortBy,
    };
    this.getArticles(options);
  }

  onToggleClick() {
    this.setState({ sortBy: this.state.sortBy === 'popularity' ? 'publishedAt' : 'popularity' }, () => {
      const { topics, selectedSources, sortBy } = this.state;
      const options = {
        topics, selectedSources, sortBy,
      };
      this.getArticles(options);
    });
  }


  onAddSource(source) {
    this.setState((state) => {
      return { selectedSources: state.selectedSources.concat([source]) };
    });
  }

  onTopicRemoval(index) {
    const { topics, selectedSources, sortBy } = this.state;
    topics.splice(index, 1);
    this.setState({ topics });

    const options = {
      topics, selectedSources, sortBy,
    };
    this.getArticles(options);
  }

  onTopicSearch(topic) {
    const { topics, selectedSources, sortBy } = this.state;
    topics.push(topic);
    this.setState({ topics });

    const options = {
      topics, selectedSources, sortBy,
    };
    this.getArticles(options);
  }

  getArticles(options) {
    const renderArticles = this.renderArticles.bind(this);

    this.props.search(options, (newsArticles) => {
      renderArticles(newsArticles);
    });
  }

  renderArticles(newsArticles) {
    this.setState({ articles: newsArticles });
  }

  render() {
    return (
      <div>
        <Header
          onRefreshClick={this.onRefreshClick}
          onToggleClick={this.onToggleClick}
          sortBy={this.state.sortBy}
        />
        <Topics
          className="topics"
          topics={this.state.topics}
          onTopicSearch={this.onTopicSearch}
          onTopicRemoval={this.onTopicRemoval}
        />
        {/* Space savers for the eventual 'login' and signup links we'll want to set up */}
        {/* <div id="accounts">
          <div><Link to="/signup"></Link></div>
          <div><Link to="/login">Login</Link></div>
        </div> */}

        <hr />

        <AddSource onAddSource={this.onAddSource} />
        <SelectedSources selectedSources={this.state.selectedSources} />
        <NewsList newsArticles={this.state.articles} />
      </div>
    );
  }
}

export default Home;
