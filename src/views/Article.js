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
  }

  const handleUpdate = () => {
    fetch(`http://localhost:9292/articles/${article.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: title,
        description: description,
        article_text: articleText
      }),
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((r) => r.json())
      .then(() => {
        refetch();
        history.push("/");
      });
  }

  return (
    <div className={styles.article}>
      <div className={styles.main}>
        <h2>{article?.title}</h2>
        <p className={styles.author}>
          Written by: {article?.author?.first_name} {article?.author?.last_name}
        </p>
        <p className={styles.body}>{article?.article_text}</p>
        {openEdit ?
          <form>
            <input
              placeholder="Title"
              defaultValue={article.title}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              placeholder="Description"
              defaultValue={article.description}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <textarea
              style={{height:200,width:600}}
              placeholder="Article Text"
              defaultValue={article.article_text}
              value={articleText}
              onChange={(e) => setArticleText(e.target.value)}/>
            <button type="submit" onClick={handleUpdate}>
              Update Article
            </button>
          </form>
        : null}
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
