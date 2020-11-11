import axios from "axios";
import { setAlert } from "./alert";
import setAuthToken from '../../utils/setAuthToken'
import {clearPosts} from './posts'

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";

//Load user
export const loadUser = () => async (dispatch) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get(" http://localhost:5000/users/getuser");
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };



//registration
export const registerUser = (payload) => async (
    dispatch
  ) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(payload);
  
    try {
      const res = await axios.post(
        "http://localhost:5000/register/user",
        body,
        config
      );
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
      dispatch(setAlert("User registered successfully!", "success"));
    } catch (err) {
      const error = err.response.data
  
      if (error) {
        dispatch(setAlert(error.msg, "error"));
      }
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

  //Login user
  export const loginUser = (payload) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(payload);
  
    try {
      const res = await axios.post(
        "http://localhost:5000/users/login",
        body,
        config
      );
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
      dispatch(setAlert("Logged in successfully", "info"));

    } catch (err) {
        
        if (err) {
          dispatch(setAlert("Invalid username or password", "error"));
        }
      
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };

  //Login

  export const logout = () => (dispatch) => {
    dispatch({
      type: LOGOUT,
    });
    window.localStorage.removeItem("token");
    dispatch(clearPosts())
    dispatch(setAlert("Logged out successfully", "info"));
  };
  