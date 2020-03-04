import React from "react";


function ArticleCard({articleData}) {
//  className is a react use
  return (
    <article className="articleCard">
      <div className="articleCard__image">
        <img src={articleData && articleData.image.url} alt={articleData && articleData.image.alt}/>
      </div>

      <div className="articleCard__text">
        <h2>{articleData && articleData.title}</h2>
        <p>{articleData && articleData.publishedDate}</p>
        <p> {articleData && articleData.blurb} </p>
        <a href= ""> Read More </a>
      </div>

    </article>
  )
}

export default ArticleCard;
