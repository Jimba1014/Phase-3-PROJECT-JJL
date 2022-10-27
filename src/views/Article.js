import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "./styles/Article.module.scss";

function Article() {
  const [article, setArticle] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setArticle(location.state?.test);
  }, [location]);

  console.log(article);

  return (
    <div className={styles.article}>
      <div className={styles.main}>
        <h2>{article?.title}</h2>
        <p className={styles.author}>
          Written by: {article?.author.first_name} {article?.author.last_name}
        </p>
        <p className={styles.body}>{article?.article_text}</p>
      </div>
      <div className={styles.image}>
        <img src={article?.pictures?.[0].image_url} />
        <p>{article?.pictures?.[0].name}</p>
      </div>
    </div>
  );
}

export default Article;
