import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import postsReducer from "../reducers/postsReducer";

const postsStore = createStore(postsReducer, applyMiddleware(thunk));

export default postsStore;
