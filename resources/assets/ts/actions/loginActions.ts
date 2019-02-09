import {createAction} from "redux-actions";
import {
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST_SEND,
  USER_LOGIN_SUCCESS,
} from "../constants/actionTypes";
import {IDispatch, IThunkAction} from '../common/interfaces';

interface IUserResponse {
    authStatus?: string,
}
export const userLoginRequestSend = () => ({
    type: USER_LOGIN_REQUEST_SEND,
})
export const userLoginSucces = (user: IUserResponse = {}) => ({
  type: USER_LOGIN_SUCCESS,
  authStatus: user.authStatus,
})
export const userLoginError = (errorMsg: string) => ({
  type: USER_LOGIN_ERROR,
    error: errorMsg,
})

export const loginExecute = (email: string, password: string): IThunkAction =>
    (dispatch: IDispatch, getState, { api }) => {
  const urlText = "http://localhost:8000/login?email=" + email + "&password=" + password
  console.log(urlText)
  dispatch(userLoginRequestSend())
  dispatch(api.get(urlText))
    .then((data) => dispatch(userLoginSucces(data)),
      (error) => {
        dispatch(userLoginError(error.message))
      })
}