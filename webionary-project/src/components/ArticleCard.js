function ArticleCard({title, description, author}){
    return(
        <div  className="card">
            <h1 className="card_title">{title}</h1>
            <p className="article_text">{description}</p>
            <p>Author: {author.first_name} {author.last_name}</p>
        </div>
    )
}
export default ArticleCard