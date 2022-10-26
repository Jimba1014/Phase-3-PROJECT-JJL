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
            <p>{article?.title}</p>
        </div>
    )
}


export default Article