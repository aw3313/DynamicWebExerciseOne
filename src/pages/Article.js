import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

import ArticleCard from '../components/ArticleCard';
import Data from '../components/Data';

function Article() {
  let {id} = useParams();
  const [article,setArticle] = useState({});

  useEffect(() =>{
    let dataArray = Data.filter((article) => article.id == id);
    setArticle(dataArray[0]);
  }, [id])

  let d = article && article.publishedDate;


  return (
  <div className="Article">

    <header
      className="articleHeader"
      style={{}}>
        <div className="articleHeaderWrapper">
          <h1> {article.title}</h1>
          <p> {article.publishedDate && new Intl.DateTimeFormat('en-US',
          {
            weekday:"long",
            month: "long",
            day: "2-digit",
            year: "numeric"

          }
        ).format(new Date(article.publishedDate))}</p>
        <p class="articleBlurb">{article.blurb}</p>
        </div>
        </header>


    <main className="articleContent">
      <div className="articleContentWrapper">
        {article.articleText && article.articleText.map((text,i)=>(<text.type key={i}>{text.data}</text.type>))}
      </div>
    </main>
  </div>
);

}

export default Article;
