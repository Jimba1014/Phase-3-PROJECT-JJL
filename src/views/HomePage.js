import ArticleCard from "../components/ArticleCard";

function HomePage({ article, articleDetail, setArticleDetail }) {
  function handleAddArticle(newArticleDetail) {
    setArticleDetail([...articleDetail, newArticleDetail]);
  }

  const renderCards = article.map((detail) => {
    return <ArticleCard {...detail} detail={detail} key={detail.id} />;
  });

  return (
    <div>
      <h2>Recent</h2>
      {renderCards}
    </div>
  );
}

export default HomePage;
