import React, { useState } from "react";
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

  const onChangeHandler = (e) => {
    setArticleInfo({ ...articleInfo, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    console.log(articleInfo);
    e.preventDefault();

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
      }),
    })
      .then((r) => r.json())
      .then(() => refetch());
  }

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
          required
        />
      </div>

      <Select
        options={categories}
        placeholder="What are you writing about?"
        className={styles.select}
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

      <button type="submit" className={styles.submit}>
        Publish
      </button>
    </form>
  );
}

export default NewArticleForm;
