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
    {/* <img src={article.urlToImage} className="articleImg" alt="#" /> */}

    {
      article.title ?
        <h3 className="articleTitle">
          {article.title}
        </h3> :
        null
    }
    {/* <h3 className="articleTitle">{article.title}</h3> */}

    {
      article.description ?
        <p className="articleDescription">{article.description}</p> :
        null
    }
    {/* <p className="articleDescription">{article.description}</p> */}

    {
      article.source.name ?
        <p className="articleSource">{article.source.name}</p> :
        null
    }
    {/* <p className="articleSource">{article.source.name}</p> */}

    {
      article.author ?
        <p className="articleAuthor">{article.author}</p> :
        null
    }
    {/* <p className="articleAuthor">{article.author}</p> */}

    {
      article.url ?
        <p className="articleUrl">{article.url}</p> :
        null
    }
    {/* <p className="articleUrl">{article.url}</p> */}

    <br />
  </div>
);


export default NewsItem;
