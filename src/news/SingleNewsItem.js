import React from 'react';

const SingleNewsItem = ({item}) => {
  return (
    <div className="item web col-sm-6 col-md-4 col-lg-4 mb-4">
      <a href={item.url} className="item-wrap fancybox" target="_blank" rel="noopener noreferrer">
        <div className="work-info">
          <h3>{item.title}</h3>
          <span>{item.source.name}</span>
        </div>
        <img className="img-fluid" alt={item.title} src={item.urlToImage} />
      </a>
    </div>
  )
}

export default SingleNewsItem;
