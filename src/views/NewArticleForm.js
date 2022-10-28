import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import Select from "react-select";

import styles from "./styles/NewForm.module.scss";

const categories = [
  { value: 1, label: "Life" },
  { value: 2, label: "Coding" },
  { value: 3, label: "Music" },
  { value: 4, label: "Sports" },
  { value: 5, label: "Tech" },
  { value: 6, label: "Entertainment" },
];

function NewArticleForm({ refetch }) {
  const [articleInfo, setArticleInfo] = useState({});

  const location = useLocation();
  const history = useHistory();

  const getCategory = (value) => {
    return categories.find((cat) => cat.value === value);
  };

  const onChangeHandler = (e) => {
    setArticleInfo({ ...articleInfo, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (location.pathname === "/edit") {
      const article = location.state?.article;
      setArticleInfo({
        ...articleInfo,
        ...article,
        picture: article?.pictures?.[0]?.image_url,
        picture_name: article?.pictures?.[0]?.name,
        author: `${article?.author?.first_name} ${article?.author?.last_name}`,
      });
    } else {
      setArticleInfo({
        title: "",
        description: "",
        article_text: "",
        category: 0,
        author: "",
      });
    }
  }, [location.pathname]);

  const handleUpdate = () => {
    fetch(`http://localhost:9292/articles/${location.state?.article?.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: articleInfo.title,
        description: articleInfo.description,
        article_text: articleInfo.article_text,
        category: articleInfo.category,
        picture: articleInfo.picture,
        picture_name: articleInfo.picture_name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((article) => {
        refetch();
        history.push({ pathname: "/article", state: { test: article } });
      });
  };

  const handlePost = () => {
    const author = articleInfo?.author?.split(" ");

    fetch("http://localhost:9292/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: articleInfo.title,
        description: articleInfo.description,
        article_text: articleInfo.article_text,
        category: articleInfo.category,
        first_name: author[0],
        last_name: author[1],
        picture: articleInfo.picture,
        picture_name: articleInfo.picture_name,
      }),
    })
      .then((r) => r.json())
      .then((article) => {
        refetch();
        history.push({ pathname: "/article", state: { test: article } });
      });
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (location.pathname === "/new_article") {
      handlePost();
    } else if (location.pathname === "/edit") {
      handleUpdate();
    }
  }

  const addDefaultSrc = (e) => {
    e.target.src =
      "https://imgs.search.brave.com/2ifs1BBJeFWLBaaP7tBttXlhe5e1B7PTCOrv2qWgTcM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9icmVh/a3Rocm91Z2gub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE4/LzEwL2RlZmF1bHQt/cGxhY2Vob2xkZXIt/aW1hZ2UucG5n";
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles.form} container`}>
      <div className={styles.top}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={articleInfo.title}
          onChange={onChangeHandler}
          className={styles.title}
          required
        />
        <input
          placeholder="Who are you?"
          className={styles.name}
          name="author"
          onChange={onChangeHandler}
          value={articleInfo.author}
          disabled={location.pathname === "/edit"}
          required
        />
        <hr />
      </div>

      <Select
        options={categories}
        placeholder="What are you writing about?"
        className={styles.select}
        value={getCategory(articleInfo.category)}
        onChange={(cat) =>
          setArticleInfo({ ...articleInfo, category: cat.value })
        }
      />
      <input
        type="text"
        name="description"
        placeholder="Give it a short summary"
        value={articleInfo.description}
        onChange={onChangeHandler}
        className={styles.description}
        required
      />
      <textarea
        type="text"
        name="article_text"
        placeholder="Tell us all about it..."
        value={articleInfo.article_text}
        onChange={onChangeHandler}
        className={styles.body}
        required
      />

      <div className={styles["image-container"]}>
        {articleInfo.picture ? (
          <>
            <img
              name="picture"
              src={articleInfo.picture}
              onError={addDefaultSrc}
              onChange={onChangeHandler}
              className={styles.thumbnail}
            />
            <button
              className={styles["remove-button"]}
              onClick={() =>
                setArticleInfo({
                  ...articleInfo,
                  picture: "",
                  picture_name: "",
                })
              }
            >
              Remove
            </button>
            <input
              placeholder="Name your image"
              className={styles["image-name"]}
              onChange={onChangeHandler}
              value={articleInfo.picture_name}
              name="picture_name"
            />
          </>
        ) : (
          <input
            placeholder="Add a cover image..."
            className={styles.image}
            name="picture"
            onChange={onChangeHandler}
          />
        )}
      </div>

      <button type="submit" className={styles.submit}>
        {location.pathname === "/edit" ? "Update" : "Publish"}
      </button>
    </form>
  );
}

export default NewArticleForm;
