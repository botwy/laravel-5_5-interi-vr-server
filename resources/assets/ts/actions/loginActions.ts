import {
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST_SEND,
  USER_LOGIN_SUCCESS,
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
} from "../constants/actionTypes";
import {PATH} from '../constants/URL';
import {IDispatch, IThunkAction} from '../common/models';
  import {Url} from '../UrlManager/UrlManager';

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
})
export const createAccountFailure = (errorMsg: string) => ({
  type: CREATE_ACCOUNT_FAILURE,
    error: errorMsg,
})

export const loginExecute = (email: string, password: string): IThunkAction =>
  (dispatch: IDispatch, getState, {api}) => {
    const formData = new FormData()
    formData.append("email", email)
    formData.append("password", password)

    dispatch(userLoginRequestSend())
    dispatch(api.post(Url.getLoginUrl(), {data: formData}))
      .then((data) => dispatch(userLoginSucces(data)),
        (error) => {
          dispatch(userLoginError(error.message))
        })
}
export const createAccount = (email: string, password: string): IThunkAction =>
  (dispatch: IDispatch, getState, {api}) => {
    const formData = new FormData()
    formData.append("email", email)
    formData.append("password", password)

    dispatch(createAccountRequest())
    dispatch(api.post(Url.getCreateAccountUrl(), {data: formData}))
      .then((data) => dispatch(createAccountSuccess(data)),
        (error) => {
          dispatch(createAccountFailure(error.message))
        })
  }