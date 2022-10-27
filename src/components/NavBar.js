import React from "react";
import { NavLink } from "react-router-dom";

import home from "../assets/home_page.png";
import newArticle from "../assets/new_article.png";
import styles from "./styles/NavBar.module.scss";

function NavBar() {
  return (
    <nav className={`${styles.nav} container`}>
      <NavLink exact to="/">
        <img src={home} />
        Home
      </NavLink>
      <NavLink to="/new_article">
        <img src={newArticle} />
        Create Article
      </NavLink>
    </nav>
  );
}

export default NavBar;
