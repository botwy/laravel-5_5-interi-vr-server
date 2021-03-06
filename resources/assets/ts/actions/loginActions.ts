import {
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST_SEND,
  USER_LOGIN_SUCCESS,
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
} from "../constants/actionTypes";
import {IDispatch, IThunkAction} from '../common/models';
import { getUrlByServiceName, SERVICES } from '../UrlManager';

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
export const createAccountRequest = () => ({
    type: CREATE_ACCOUNT_REQUEST,
})
export const createAccountSuccess = (user: IUserResponse = {}) => ({
  type: CREATE_ACCOUNT_SUCCESS,
  authStatus: user.authStatus,
})
export const createAccountFailure = (errorMsg: string) => ({
  type: CREATE_ACCOUNT_FAILURE,
    error: errorMsg,
})

export const loginExecute = (email: string, password: string) =>
  (dispatch: IDispatch, getState, {api}) => {
    const formData = new FormData()
    formData.append("email", email)
    formData.append("password", password)

    dispatch(userLoginRequestSend())
    dispatch(api.post(getUrlByServiceName(SERVICES.login), {data: formData}))
      .then((data) => dispatch(userLoginSucces(data)),
        (error) => {
          dispatch(userLoginError(error.message))
        })
}
export const createAccount = (email: string, password: string) =>
  (dispatch: IDispatch, getState, {api}) => {
    const formData = new FormData()
    formData.append("email", email)
    formData.append("password", password)

    dispatch(createAccountRequest())
    dispatch(api.post(getUrlByServiceName(SERVICES.createAccount), {data: formData}))
      .then((data) => dispatch(createAccountSuccess(data)),
        (error) => {
          console.log(error)
          dispatch(createAccountFailure(error.message))
        })
  }