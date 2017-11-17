import React from 'react';
import Header from './Header';
import NewsList from './NewsList';
import dummyArticles from '../dummy-data/articles';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mostPopular: true,
    };

    this.onRefreshClick = this.onRefreshClick.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
  }

  onRefreshClick() {
    // trigger get request to server '/load' route
  }

  onToggleClick() {
    this.setState({mostPopular: !this.state.mostPopular});
    // trigger get request to server to '/popular' or '/recent' routes as necessary
  }

  render() {
    return (
      <div>
        <Header onRefreshClick={this.onRefreshClick} onToggleClick={this.onToggleClick} mostPopular={this.state.mostPopular} />
         {/* // RENDERING BY PASSING NEWSLIST DUMMY DATA */}
         <NewsList newsArticles={dummyArticles} />
         {/* Proper rendering of articles given dummy data.  Will need to uncomment 'article.source' of NewsItem component when we have our specialized data rendering.  Still needs a lot of work with CSS */}
      </div>
    );
  }
}

export default App;
