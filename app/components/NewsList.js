import React from 'react';
import NewsItem from './NewsItem';

const NewsList = props => (
  <div>
    {props.newsArticles.map( (article) => {
      return <NewsItem article={article} key={article.url} />;
    })}
  </div>
);

export default NewsList;
