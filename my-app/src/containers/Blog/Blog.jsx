import BlogItem from "../../elements/BlogItem";

import "../../assets/styles/containers/blog.scss";

function Blog() {
  return (
    <section className="blog">
      <h2 className="blog-name">Blog</h2>
        <ul className="blog-list">
          <BlogItem></BlogItem>
          <BlogItem></BlogItem>
          <BlogItem></BlogItem>
          <BlogItem></BlogItem>
        </ul>
    </section>
  );
}
export default Blog;