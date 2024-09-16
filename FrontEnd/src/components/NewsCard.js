import React from 'react'

const NewsCard = () => {
    const { title, urlToImage, source, publishedAt } = article;
  return (
    <div>
      <img src="" alt="" />
      <div>
        <h3>{title}</h3>
        <p>{source.name}-{new Date(published)}</p>
      </div>
    </div>
  )
}

export default NewsCard
