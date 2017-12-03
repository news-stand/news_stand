import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniq from 'node-uniq';
import { connect } from 'react-redux';

import search from './helpers/search';
import NewsItem from './NewsItem';

class NewsList extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="news-list">
        {props.newsArticles.length === 0 ?
          <div id="no-articles">No articles found. Please try another search</div> :
          props.newsArticles && uniq(props.newsArticles, i => i.url)
            .map(article => (
              <NewsItem article={article} key={article.url} />
            ))
        }
      </div>
    );
  }
};

function mapStateToProps(state) {
  return 
}

NewsList.propTypes = {
  newsArticles: PropTypes.arrayOf(PropTypes.object).isRequired,

  export default NewsList;
