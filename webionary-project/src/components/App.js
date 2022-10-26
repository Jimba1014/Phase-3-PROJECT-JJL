import React from "react";
import { Switch, Route } from 'react-router-dom';
import '../App.css';
import Footer from './Footer'
import NavBar from './NavBar'
import Header from './Header';
import HomePage from './HomePage';
import NewArticleForm from './NewArticleForm';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Switch>
        <Route exact path ="/">
          <HomePage/>
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
