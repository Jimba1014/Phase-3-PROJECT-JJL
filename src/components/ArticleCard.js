import { useHistory } from "react-router-dom";

function ArticleCard({ title, description, author, detail, category }) {
  const history = useHistory();

  function handleClick() {
    history.push({
      pathname: "/article",
      state: { test: detail },
    });
  }
  return (
    <div onClick={handleClick} className="card">
      <h1 className="card_title">{title}</h1>
      <p className="article_text">{description}</p>
      <p>{category}</p>
      {author && (
        <p>
          Author: {author?.first_name} {author?.last_name}
        </p>
      )}
    </div>
  );
}
export default ArticleCard;
