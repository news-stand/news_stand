import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../public/assets/defaultImage';

import FavoriteButton from './FavoriteButton';

const NewsItem = ({ article, onAddFavorite }) => (
  <div className="newsItem">
    {
      article.urlToImage ?
        <a href={article.url} target="_blank">
          <img src={article.urlToImage} className="articleImg" alt="#" />
        </a>
        :
        <a href={article.url} target="_blank">
          <img src={defaultImage} className="defaultImg" alt="#" />
        </a>
    }
    <FavoriteButton article={article} onAddFavorite={onAddFavorite} />
    {
      article.title ?
        <a href={article.url} target="_blank">
          <h3 className="articleTitle"> {article.title} </h3>
        </a>
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

    <br />
  </div>
);

NewsItem.propTypes = {
  article: PropTypes.shape({
    urlToImage: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    source: PropTypes.shape({
      name: PropTypes.string,
    }),
    author: PropTypes.string,
    url: PropTypes.string.isRequired,
  }).isRequired,
  onAddFavorite: PropTypes.func.isRequired,
};


export default NewsItem;
