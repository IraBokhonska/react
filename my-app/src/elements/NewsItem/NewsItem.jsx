import "../../assets/styles/elements/news-item.scss";

function NewsItem({ children }) {
  return <li className="news-item">{children}</li>;
}

export default NewsItem;