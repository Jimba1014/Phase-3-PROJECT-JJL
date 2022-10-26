import { useEffect, useState } from 'react'
import NewArticleForm from "./NewArticleForm"
import ArticleCard from "./ArticleCard"

function HomePage({article, articleDetail, setArticleDetail}){


    function handleAddArticle(newArticleDetail) {
        setArticleDetail([...articleDetail, newArticleDetail]);
      }

    const renderCards = article.map((detail) => {
        return <ArticleCard {...detail} detail={detail} key={detail.id}/> })

    return(
        <div>
            {renderCards}
        </div>
    )
}

export default HomePage