import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';

const NewsList = props => (
  <div>
    {props.newsArticles && props.newsArticles.map(article => (
      <NewsItem article={article} key={article.url} />
    ))}
  </div>
);

NewsList.propTypes = {
  newsArticles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NewsList;
