const Blog = ({ post }) => {
  return (
    <div className="blog">
      <h3>{post?.title}</h3>
      <p>{post?.body}</p>
    </div>
  );
};

export default Blog;
