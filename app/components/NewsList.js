import React from 'react';
import PropTypes from 'prop-types';
import uniq from 'node-uniq';
import { RingLoader } from 'react-spinners';
import NewsItem from './NewsItem';

const NewsList = props => (
  <div className="news-list">
    <div>
      <RingLoader color={'#4286f4'} size={100} loading={props.loading} />
    </div>
    {props.newsArticles.length === 0 && !props.loading ?
      <div id="no-articles">
        No articles found. Please try another search
      </div> :
      props.newsArticles && uniq(props.newsArticles, i => i.url)
        .map(article => (
          <NewsItem
            article={article}
            key={article.url}
            loggedIn={props.loggedIn}
            user={props.user}
          />
        ))
    }
  </div>
);

NewsList.propTypes = {
  newsArticles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NewsList;

// <Loader color="26A65B" size="32px" margin="4px" />
