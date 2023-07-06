import Blog from "./Blog";
import "./blogsStyle.css";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "./redux/actions/postActions";
const Blogs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const posts = useSelector((state) => state.posts);
  const isLoading = useSelector((state) => state.isLoading);
  const errors = useSelector((state) => state.errors);
  console.log("IS LOADING", isLoading);
  return (
    <div className="container">
      <Header />
      <div className="content">
        {isLoading && <h2>Loading . . .</h2>}
        {!isLoading && (
          <>
            <h1>Total Posts {posts.length}</h1>
            <Blog post={posts[0]} />{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default Blogs;
