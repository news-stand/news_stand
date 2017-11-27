import React from 'react';
import PropsTypes from 'prop-types';
import axios from 'axios';

import Topics from './Topics';
import AddSource from './AddSource';
import SelectedSources from './SelectedSources';
import NewsList from './NewsList';
import Header from './Header';
import getSources from './helpers/getSources';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'publishedAt',
      articles: [],
      selectedSources: [{
        label: 'TechCrunch',
        id: 'techcrunch',
      }],
      topics: ['net neutrality'],
    };

    this.onRefreshClick = this.onRefreshClick.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAddSource = this.onAddSource.bind(this);
    this.onRemoval = this.onRemoval.bind(this);
    this.onTopicSearch = this.onTopicSearch.bind(this);
    this.setPreferences = this.setPreferences.bind(this);
  }

  componentDidMount() {
    const { topics, selectedSources, sortBy } = this.state;
    const options = {
      topics, selectedSources, sortBy,
    };
    this.props.getPreferences(options, (articlesAndPreferences) => {
      if (articlesAndPreferences.data.preferences) {
        // if user is logged in
        this.setState({
          topics: articlesAndPreferences.data.preferences.topics,
          selectedSources: articlesAndPreferences.data.preferences.selectedSources,
        });
      }
      this.setState({ articles: articlesAndPreferences.data.articles });
    });
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
    const sources = this.state.selectedSources;
    sources.push(source);
    this.setState({ selectedSources: sources });

    const { topics, sortBy } = this.state;
    const options = {
      topics,
      selectedSources: sources,
      sortBy,
    };
    this.getArticles(options);
  }

  onRemoval(index, type) {
    const { topics, selectedSources, sortBy } = this.state;

    if (type === 'topics') {
      topics.splice(index, 1);
      this.setState({ topics });
    } else {
      selectedSources.splice(index, 1);
      this.setState({ selectedSources });
    }

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

  setPreferences() {
    const { topics, selectedSources } = this.state;

    axios.post('/preferences', { topics, selectedSources })
      .then((message) => {
        console.log(message);
      })
      .catch(() => {
        console.log('There was an error saving user preferences');
      });
  }

  getArticles(options) {
    this.props.search(options, (newsArticles) => {
      this.setState({ articles: newsArticles });
    });
  }

  render() {
    return (
      <div>
        <div className="headerContainer">
          <Header
            onRefreshClick={this.onRefreshClick}
            onToggleClick={this.onToggleClick}
            sortBy={this.state.sortBy}
          />
        </div>
        <div className="contentContainer">
          <div className="topicsAndSourcesContainer">
            <button
              id="savePreferences"
              className="btn btn-primary"
              onClick={this.setPreferences}
            >
              Save Preferences
            </button>
            <Topics
              className="topics"
              topics={this.state.topics}
              onTopicSearch={this.onTopicSearch}
              onRemoval={this.onRemoval}
            />

            <AddSource onAddSource={this.onAddSource} getSources={getSources} />
            <SelectedSources
              selectedSources={this.state.selectedSources}
              onRemoval={this.onRemoval}
            />
          </div>

          <div className="articlesContainer">
            <NewsList newsArticles={this.state.articles} />
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  search: PropsTypes.func.isRequired,
  getPreferences: PropsTypes.func.isRequired,
};

export default Home;
