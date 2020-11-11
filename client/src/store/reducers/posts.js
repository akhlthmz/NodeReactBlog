import {
  GET_POSTS,
  ADD_POST,
  CLEAR_POSTS,
  POSTS_ERROR,
} from "../actions/posts";

const initialState = {
  posts: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case POSTS_ERROR:
      return {
        ...state,
        loading: false,
      };
    case CLEAR_POSTS:
      return {
        ...state,
        posts: [],
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, payload],
      };
    default:
      return state;
  }
}
