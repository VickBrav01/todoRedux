import { loginStart, loginSuccess, loginFailure, logOut } from "./userSlice";
import {
  todoStart,
  todoSuccess,
  todoFailure,
  deleteTodoStart,
  deleteTodoSuccess,
  deleteTodoFailure,
} from "./todoSlice";
import axios from "axios";
import { apiDomain } from "../utils/utils";
export const loginUser = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const { data } = await axios.post(`${apiDomain}/auth/login`, user);
    dispatch(loginSuccess(data));
    alert("Logged in succesfully");
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const logOutuser = async (dispatch) => {
  dispatch(logOut());
};

export const getTodosData = async (dispatch) => {
  dispatch(todoStart());
  try {
    const { data } = await axios.get(`${apiDomain}/todos`);
    dispatch(todoSuccess(data));
  } catch (err) {
    dispatch(todoFailure());
  }
};

export const deleteTodo = async (id, dispatch) => {
  dispatch(deleteTodoStart());
  try {
    await axios.delete(`${apiDomain}/todo/${id}`);
    dispatch(deleteTodoSuccess(id));
  } catch (err) {
    dispatch(deleteTodoFailure());
  }
};
