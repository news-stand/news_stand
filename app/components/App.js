import React from 'react';
import Header from './Header';
import NewsList from './NewsList';
import dummyArticles from '../dummy-data/articles';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mostPopular: true,
      articles: [],
    };

    this.onRefreshClick = this.onRefreshClick.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
  }

  onRefreshClick() {
    // trigger get request to server '/load' route
  }

  onToggleClick() {
    this.setState({ mostPopular: !this.state.mostPopular });
    // trigger get request to server to '/popular' or '/recent' routes as necessary
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
         {/* // RENDERING BY PASSING NEWSLIST DUMMY DATA */}
         <NewsList newsArticles={this.state.articles} />
         {/* Proper rendering of articles given dummy data.  Will need to uncomment 'article.source' of NewsItem component when we have our specialized data rendering.  Still needs a lot of work with CSS */}
      </div>
    );
  }
}

export default App;
