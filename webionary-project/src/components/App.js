import React from "react";
import { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom';
import '../App.css';
import Footer from './Footer'
import NavBar from './NavBar'
import Header from "./Header";
import HomePage from './HomePage';
import NewArticleForm from './NewArticleForm';
import SearchBar from './SearchBar'

function App() {

  const [articleDetail, setArticleDetail] = useState([])
  const [search,setSearch] = useState("")

  const newDisplayedArticleArray = articleDetail.filter((articleDetail) => {
    return articleDetail.title?.toLowerCase().includes(search.toLowerCase()) || 
    articleDetail.description?.toLowerCase().includes(search.toLowerCase()) ||
    articleDetail.author.name?.toLowerCase().includes(search.toLowerCase())
  })

  useEffect(() => {
    fetch('http://localhost:9292/articles_basics')
    .then((res) => res.json())
    .then((data) => setArticleDetail(data))
}, [])


  return (
    <div className="App">
      <Header/>
      <NavBar />
      <Switch>
        <Route exact path ="/">
        <SearchBar setSearch={setSearch} search={search}/>
          <HomePage 
          article = {newDisplayedArticleArray} 
          articleDetail = {articleDetail}
          setArticleDetail = {setArticleDetail}/>
        </Route>
        <Route path="/new_article">
          <NewArticleForm/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
