'use client'

import Article from "@/pageComponents/article";

export default function articlePage({params} : { params : {articleId : number} }) {

    return (
          <Article articleId={params.articleId}/> 
    );
  }
  
