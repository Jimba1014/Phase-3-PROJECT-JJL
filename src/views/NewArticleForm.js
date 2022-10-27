import React, { useState } from 'react';

function NewArticleForm( {handleAddArticle} ) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [article, setArticle] = useState("");
    const [category, setCategory] = useState("");
    const [picName, setPicName] = useState("")
    const [url, setUrl] = useState("")

    function handleSummit(e){
        e.preventDefault();
        const newArticle = {
            title: title,
            description: description,
            article_text: article,
            author_id: 1,
            category_id: parseInt(category),
        }
        fetch('http://localhost:9292/articles', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newArticle)
        })
        const newPicture ={
            name: picName,
            image_url: url,
            article_id: newArticle.id
        }
        fetch('http://localhost:9292/pictures', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPicture)
        })

    }
    return(
        <div onSubmit={handleSummit}>
            <form>
                <label htmlFor='title'>Title</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor='Category'>Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value={1}>Life</option>
                    <option value={2}>Coding</option>
                    <option value={3}>Music</option>
                    <option vaule={4}>Sports</option>
                    <option vaule={5}>Tech</option>
                    <option vaule={6}>Entertainment</option>
                </select>

                <label htmlFor='description'>Description</label>
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label htmlFor="pictureUrl">Picture Url</label>
                <input 
                    type="text"
                    name="pictureUrl"
                    placeholder='Picture Url'
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <label htmlFor="pictureName">Name for Picture</label>
                <input
                    type="text"
                    name="pictureName"
                    placeholder='Picture Name'
                    value={picName}
                    onChange={(e) => setPicName(e.target.value)}
                />
                <textarea
                    style={{height: 100, width:700, margin:20, padding:10}}
                    type="text"
                    name="article"
                    placeholder="Article"
                    value={article}
                    onChange={(e) => setArticle(e.target.value)}
                />
                <button type="submit" onSubmit={{handleAddArticle}}>Submit</button>
            </form>
        </div>
    )
}


export default NewArticleForm