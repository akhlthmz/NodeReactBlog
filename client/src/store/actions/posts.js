import axios from "axios";
import { setAlert } from "./alert";

//actions
export const GET_POSTS = "GET_POSTS";
export const POSTS_ERROR = "POSTS_ERROR";
export const ADD_POST = "ADD_POST";
export const CLEAR_POSTS = "CLEAR_POSTS";

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/articles/");

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
    });
  }
};

export const addPost = (payload) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(payload);

  try {
    await axios.post("http://localhost:5000/articles/add", body, config);

    dispatch({
      type: ADD_POST,
      payload: payload,
    });
    dispatch(setAlert("Post added successfully", "success"));
  } catch (err) {
    const error = err.response.data.msg;

    if (error) {
      dispatch(setAlert("Something went wrong.Please try again", "error"));
    }
  }
};

export const clearPosts = () => (dispatch) => {
  dispatch({
    type: CLEAR_POSTS,
  });
};
