import { useHistory, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "./styles/Article.module.scss";

function Article({ refetch }) {
  const [article, setArticle] = useState(null);
  const location = useLocation();
  const [title, setTitle] = useState(article?.title)
  const [description, setDescription] = useState(article?.description)
  const [articleText, setArticleText] = useState(article?.article_text)
  const [openEdit, setOpenEdit] = useState(false)

  const history = useHistory();

  useEffect(() => {
    setArticle(location.state?.test);
  }, [location]);

  const handleDelete = () => {
    fetch(`http://localhost:9292/articles/${article.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(() => {
        refetch();
        history.push("/");
      });
  };
  function handleOpenEdit(){
    setOpenEdit(r => !r)
    console.log(openEdit)
  }

  return (
    <div className={styles.article}>
      <div className={styles.main}>
        <h2>{article?.title}</h2>
        <p className={styles.author}>
          Written by: {article?.author?.first_name} {article?.author?.last_name}
        </p>
        <p className={styles.body}>{article?.article_text}</p>
        {openEdit ? <p>Hello There</p> : null}
        <button className={styles.edit} onClick={handleOpenEdit}>
          Edit Article
        </button>
      </div>
      <div className={styles.image}>
        <img src={article?.pictures?.[0]?.image_url} />
        <p>{article?.pictures?.[0]?.name}</p>
        {article?.pictures?.length ? <hr /> : <></>}
        <button className={styles.delete} onClick={handleDelete}>
          Delete Article
        </button>
      </div>
    </div>
  );
}

export default Article;
