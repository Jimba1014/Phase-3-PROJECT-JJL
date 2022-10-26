import { useEffect, useState } from 'react'
import NewArticleForm from "./NewArticleForm"
import ArticleCard from "./ArticleCard"

function HomePage({article, articleDetail, setArticleDetail}){


    function handleAddArticle(newArticleDetail) {
        setArticleDetail([...articleDetail, newArticleDetail]);
      }

    const renderCards = article.map((detail) => {
        return <ArticleCard {...detail} key={detail.id}/> })

    return(
        <div>
            <h1>this is the home page</h1>
            {renderCards}
        </div>
    )
}

export default HomePage