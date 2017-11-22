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
        <div
          className="hidden"
        />
    }  
    {/* <img src={article.urlToImage} className="articleImg" alt="#" /> */}

    {
      article.title ?
        <h3 className="articleTitle">
          {article.title}
        </h3> :
        <h3 className="hidden">ARTICLE MISSING TITLE</h3>
    }
    {/* <h3 className="articleTitle">{article.title}</h3> */}

    {
      article.description ?
        <p className="articleDescription">{article.description}</p> :
        <p className="hidden">ARTICLE MISSING DESCRIPTION</p>
    }
    {/* <p className="articleDescription">{article.description}</p> */}

    {
      article.source.name ?
        <p className="articleSource">{article.source.name}</p> :
        <p className="hidden">ARTICLE MISSING SOURCE NAME</p>
    }
    {/* <p className="articleSource">{article.source.name}</p> */}

    {
      article.author ?
        <p className="articleAuthor">{article.author}</p> :
        <p className="hidden">ARTICLE MISSING AUTHOR</p>
    }
    {/* <p className="articleAuthor">{article.author}</p> */}

    {
      article.url ?
        <p className="articleUrl">{article.url}</p> :
        <p className="hidden">ARTICLE MISSING URL</p>
    }
    {/* <p className="articleUrl">{article.url}</p> */}

    <br />
  </div>
);


export default NewsItem;
