import React from "react";
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import Article from "./Article";
import NewArticleForm from "./NewArticleForm";
import HomePage from "./HomePage";

const App = () => {
  const [articleDetail, setArticleDetail] = useState([]);
  const [searchOptions, setSearchOptions] = useState([]);

  const getArticles = () => {
    fetch("http://localhost:9292/articles_basics")
      .then((res) => res.json())
      .then((data) => {
        setArticleDetail(data);
        setSearchOptions(
          data.map((article) => {
            return { value: article, label: article.title };
          })
        );
      });
  };

  useEffect(() => {
    getArticles();
  }, []);

  function updatedArticleDetail(updatedobj) {
    const updatedArray = articleDetail.map((t) => {
      if (t.id === updatedobj.id) {
        return updatedobj;
      } else {
        return t;
      }
    });
    setArticleDetail(updatedArray);
  }

  return (
    <div className="App">
      <NavBar />
      <Header />
      <Switch>
        <Route exact path="/">
          <SearchBar options={searchOptions} />
          <HomePage
            article={articleDetail}
            articleDetail={articleDetail}
            setArticleDetail={setArticleDetail}
          />
        </Route>
        <Route path="/article">
          <Article
            updatedArticleDetail={updatedArticleDetail}
            articleDetail={articleDetail}
            refetch={getArticles}
          />
        </Route>
        <Route path="/new_article">
          <NewArticleForm refetch={getArticles} />
        </Route>
        <Route path="/edit">
          <NewArticleForm refetch={getArticles} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
