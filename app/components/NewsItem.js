import React from 'react';

const NewsItem = ({ article }) => (
  <div className="newsItem">
    {
      article.urlToImage ?
        <img
          src={article.urlToImage}
          className="articleImg"
          alt="#"
        /> :
        null
    }

    {
      article.title ?
        <h3 className="articleTitle">
          {article.title}
        </h3> :
        null
    }

    {
      article.description ?
        <p className="articleDescription">{article.description}</p> :
        null
    }

    {
      article.source.name ?
        <p className="articleSource">{article.source.name}</p> :
        null
    }

    {
      article.author ?
        <p className="articleAuthor">{article.author}</p> :
        null
    }

    {
      article.url ?
        <p className="articleUrl">{article.url}</p> :
        null
    }

    <br />
  </div>
);


export default NewsItem;
