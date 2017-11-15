import React from 'react';

const NewsItem = ({article}) => {
  return (
    <div>
      <p>We have an article!</p>
      <p>{article.title}</p>
      <p>{article.author}</p>
      <p>{article.url}</p>
      <br/>
    </div>
  )
}

export default NewsItem;