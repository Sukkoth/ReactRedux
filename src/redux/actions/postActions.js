import axios from "axios";
import POST_ACTIONS from "./postActionTypes";

export const setLoading = (loading) => {
  return {
    type: POST_ACTIONS.SET_IS_LOADING,
    payload: loading
  };
};

export const setErrors = (err) => {
  return {
    type: POST_ACTIONS.SET_ERRORS,
    payload: err
  };
};

export const setPosts = (posts) => {
  return {
    type: POST_ACTIONS.SET_POSTS,
    payload: posts
  };
};

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch(setPosts(response.data));
    } catch (err) {
      dispatch(setErrors(err));
    } finally {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 2000);
    }
  };
};

export const searchPost = (postId) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      dispatch(setPosts(response.data));
    } catch (err) {
      dispatch(setErrors(err));
    } finally {
      dispatch(setLoading(false));
    }
  };
};
