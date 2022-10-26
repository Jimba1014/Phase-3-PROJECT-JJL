import {useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react'

function Article( {updatedArticleDetails} ){

    const [article, setArticle] = useState(null)
    const location = useLocation();
    
    useEffect(() => {
        setArticle(location.state?.test)
    }, [location])
    return(
        <div>
            This will be the article
            <h2>{article?.title}</h2>
            <p>Written by: {article?.author.first_name} {article?.author.last_name}</p>
            <p>{article?.article_text}</p>
        </div>
    )
}


export default Article