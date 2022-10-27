import React, { useState } from 'react';

function NewArticleForm( {handleAddArticle} ) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [article, setArticle] = useState("");
    const [category, setCategory] = useState("");


    function handleSummit(e){
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
            .then((newArticle) => handleAddArticle(newArticle))
    }
    return(
        <div>
            <h1>Form for new Article in homepage</h1>
            <form onSubmit={NewArticleForm}>
                <label htmlFor='title'>Title</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor='image'>Description</label>
                <input
                    type="text"
                    name="image"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label htmlFor='article'>Article</label>
                <input
                    type="text"
                    name="article"
                    placeholder="Article"
                    value={article}
                    onChange={(e) => setArticle(e.target.value)}
                />
                <label htmlFor='Category'>Category</label>
                <input 
                    type="text"
                    name="Category"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


export default NewArticleForm