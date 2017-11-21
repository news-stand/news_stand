import React from 'react';
import NewsItem from './NewsItem';

const NewsList = props => (
<<<<<<< HEAD
  <div>
    {props.newsArticles && props.newsArticles.map(article => (
      <NewsItem article={article} key={article.url} />
    ))}
=======
  <div className="NewsList">
    {/* Turnery operator to render newsArticles if there are any,
    and to render an empty <div /> if not */}
    {props.newsArticles ? props.newsArticles.map(article =>
      <NewsItem article={article} key={article.url} />) : <div />}
>>>>>>> Fixed rendering of NewsItems to pass all tests.  Now if no articles are passed to into the NewsList only an empty div will render (no NewsItems).  This was done using a turnary operator
  </div>
);

export default NewsList;
