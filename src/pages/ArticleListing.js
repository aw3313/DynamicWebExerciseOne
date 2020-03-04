import React from "react";

import ArticleCard from '../components/ArticleCard.js';

import Data from "../components/Data.js";

//array creation of a loop
// anything inside () will execute
//article means the value of an object, meaing each article of the card
// 6 articles in data file
//array of objects article 1
// single object in array article 2

function ArticleListing() {

  return (
    <div>
      <header>
        <h1>Article</h1>
      </header>
      <main>

        {Data.map((article,i)=> (
          <ArticleCard key={i} articleData={article} />
        ))}

      </main>
    </div>
  );
}

export default ArticleListing;
