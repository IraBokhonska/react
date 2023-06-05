import NewsItem from "../../elements/NewsItem";

import "../../assets/styles/containers/news.scss";

function News() {
  return (
    <section className="news">
      <h2 className="news-name">News</h2>
        <ul className="news-list">
          <NewsItem></NewsItem>
          <NewsItem></NewsItem>
          <NewsItem></NewsItem>
        </ul>
    </section>
  );
}
export default News;