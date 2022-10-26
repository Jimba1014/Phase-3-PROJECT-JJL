import { useEffect, useState } from 'react'
import SearchBar from "./SearchBar"
import NewArticleForm from "./NewArticleForm"
import ArticleCard from "./ArticleCard"

function HomePage(){
    const [articleDetail, setArticleDetail] = useState([])
    const [search,setSearch] = useState("")

    useEffect(() => {
        fetch('http://localhost:9292/articles_basics')
        .then((res) => res.json())
        .then((data) => setArticleDetail(data))
    }, [])

    const renderCards = articleDetail.map((detail) => {
        return <ArticleCard {...detail} key={detail.id}/> })

    return(
        <div>
            <h1>this is the home page</h1>
            <SearchBar setSearch={setSearch}/>
            {renderCards}
        </div>
    )
}

export default HomePage