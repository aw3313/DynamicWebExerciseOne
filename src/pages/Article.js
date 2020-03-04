import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

import ArticleCard from '../components/ArticleCard';
import Data from '../components/Data';

function Article() {
  let {id} = useParams();

  return (
  <div>
    <header>
      <h1>Article</h1>
    </header>
    <main>
      <Article/>
    </main>
  </div>
);

}

export default Article;
