import React from 'react';
import NewsItem from './NewsItem';

const NewsList = (props) => {
  return (
    <div>
      {props.newsArticles.articles.map( article => {
        return <NewsItem article={article} key={article.url} />
      })}
    </div>
  )
}

export default NewsList;
