import React from 'react';
import PropsTypes from 'prop-types';
import axios from 'axios';
import Button from 'material-ui/Button';

import Topics from './Topics';
import AddSource from './AddSource';
import SelectedSources from './SelectedSources';
import NewsList from './NewsList';
import Header from './Header';
import getSources from './helpers/getSources';

const buttonStyle = {
  fontSize: '10px',
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'publishedAt',
      articlesLoaded: false,
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
      let minArticles = articlesAndPreferences.data.articles || [];
      this.setState({ articles: minArticles, articlesLoaded: true });
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
    this.setPreferences();
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
      this.setState({ articles: newsArticles, articlesLoaded: true });
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
            user={this.props.user}
            loggedIn={this.props.loggedIn}
          />
        </div>
        <div className="contentContainer">
          <div className="topicsAndSourcesContainer">
            <Topics
              className="topics"
              topics={this.state.topics}
              onTopicSearch={this.onTopicSearch}
              onRemoval={this.onRemoval}
              setPreferences={this.setPreferences}
            />
            <AddSource onAddSource={this.onAddSource} getSources={getSources} setPreferences={this.setPreferences} />
            <SelectedSources
              selectedSources={this.state.selectedSources}
              onRemoval={this.onRemoval}
            />
          </div>
          <div className="articlesContainer">
            <NewsList
              loading={!this.state.articlesLoaded}
              newsArticles={this.state.articles}
              user={this.props.user}
              loggedIn={this.props.loggedIn}
            />
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
