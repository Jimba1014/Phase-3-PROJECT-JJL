import ArticleCard from "../components/ArticleCard";

function HomePage({ article, articleDetail, setArticleDetail }) {
  function handleAddArticle(newArticleDetail) {
    setArticleDetail([...articleDetail, newArticleDetail]);
  }

  console.log(article);

  const renderCards = article.map((detail) => {
    return <ArticleCard {...detail} detail={detail} key={detail.id} />;
  });

  return <div>{renderCards}</div>;
}

export default HomePage;
