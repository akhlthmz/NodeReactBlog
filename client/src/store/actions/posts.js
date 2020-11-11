import axios from "axios";
import { setAlert } from "./alert";

//actions
export const GET_POSTS = "GET_POSTS";
export const POSTS_ERROR = "POSTS_ERROR"
export const ADD_POST = "ADD_POST";
export const CLEAR_POSTS = "CLEAR_POSTS";

export const getPosts = () => async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:5000/articles/");
      console.log(res.data)
  
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
          type:POSTS_ERROR
      })
    }
  };

export const clearPosts = () => dispatch=> {
    dispatch({
        type:CLEAR_POSTS
    })
}