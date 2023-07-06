import POST_ACTIONS from "../actions/postActionTypes";
const initialState = {
  posts: [],
  isLoading: false,
  errors: {}
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ACTIONS.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    case POST_ACTIONS.SET_ERRORS:
      return {
        ...state,
        errors: action.payload
      };

    case POST_ACTIONS.SET_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
};

export default postsReducer;
