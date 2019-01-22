import axios from "axios";
import {
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST_SEND,
  USER_LOGIN_SUCCESS,
} from "../constants/actionTypes";

const userLoginRequestSend = () => ({
  type: USER_LOGIN_REQUEST_SEND,
})
const userLoginSucces = (user) => ({
  type: USER_LOGIN_SUCCESS,
  user,
})
const userLoginError = () => ({
  type: USER_LOGIN_ERROR,
})

export const loginExecute = (email, password) => (dispatch) => {
  console.log("localhost:8000/login?email=" + email + "&password=" + password)
  dispatch(userLoginRequestSend())
  axios.get("/login?email=" + email + "&password=" + password)
    .then((value = {}) => {
      console.log(value.data)
      return value.data;
    })
    .then((data) => dispatch(userLoginSucces(data)))
    .catch(() => dispatch(userLoginError()))
}