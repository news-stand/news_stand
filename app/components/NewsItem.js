import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../public/assets/defaultImage';


const NewsItem = ({ article }) => (
  <div className="newsItem">
    {
      article.urlToImage ?
        <a href={article.url} target="_blank"> <img src={article.urlToImage} className="articleImg" alt="#" /></a>
        :
        <a href={article.url} target="_blank"> <img src={defaultImage} alt="#" /></a>
    }

    {
      article.title ?
        <a href={article.url} target="_blank"> <h3 className="articleTitle"> {article.title} </h3></a>
        :
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

NewsItem.propTypes = {
  article: PropTypes.share({
    urlToImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    source: PropTypes.share({
      name: PropTypes.string.isRequired,
    }),
    author: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};


export default NewsItem;
