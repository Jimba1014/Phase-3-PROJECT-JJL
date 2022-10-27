import { useHistory } from "react-router-dom";

import styles from "./styles/ArticleCard.module.scss";

import defaultImage from "../assets/placeholder.webp";

function ArticleCard({ title, description, author, detail, pictures }) {
  const history = useHistory();

  function handleClick() {
    history.push({
      pathname: "/article",
      state: { test: detail },
    });
  }
  return (
    <div onClick={handleClick} className={styles.card}>
      <div className={styles.image}>
        <img src={pictures?.length ? pictures?.[0]?.image_url : defaultImage} />
      </div>

      <div className={styles.info}>
        <h1 className="card_title">{title}</h1>
        <p className={styles.desc}>{description}</p>
        {author?.categories.length && <p>in {author?.categories?.[0]?.name}</p>}
        {author && (
          <p className={styles.author}>
            by {author?.first_name} {author?.last_name}
          </p>
        )}
      </div>
    </div>
  );
}
export default ArticleCard;
