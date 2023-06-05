import "../../assets/styles/elements/blog-item.scss";

function BlogItem({ children }) {
  return <li className="blog-item">{children}</li>;
}

export default BlogItem;
