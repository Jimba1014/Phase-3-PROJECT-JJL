import React, { useState } from 'react';

function handleAddArticle( {handleAddArticle} ) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [article, setArticle] = useState("");
    const [category, setSCategory] = useState("");


function NewArticleForm(e){
    e.preventDefault();
        fetch("http://localhost:9292/articles_basics", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
             },
             body: JSON.stringify({
                title: title,
                description: description,
                article_text: article,
                category: category
             })
        })
        .then((r) => r.json())
        .then((newArticle) => handleAddShow(newArticle))
    }
    return(
        <div>
            <h1>Form for new Article in homepage</h1>
        </div>
    )
}


export default NewArticleForm