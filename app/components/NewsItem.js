import React from 'react';

const NewsItem = ({article}) => {
  return (
    <div className="newsItem">
      <img src={article.urlToImage} className='articleImg' />>
      <h3 className='articleTitle'>{article.title}</h3>
      <p className='articleDescription'>{article.description}</p>
      {/* <p className='articleSource'>{article.source}</p> */}
      <p className='articleAuthor'>{article.author}</p>
      <p className='articleUrl'>{article.url}</p>
      <br/>
    </div>
  )
}

export default NewsItem;
// TODO: uncomment source when we have backend-crafted source data