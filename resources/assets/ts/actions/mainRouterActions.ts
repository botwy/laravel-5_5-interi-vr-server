import {
  AUTH_REQUEST_SEND,
  AUTH_SUCCESS,
  AUTH_ERROR,
} from "../constants/actionTypes";
import {PATH} from '../constants/URL';
import {IAuthResponse, IThunkAction} from "../common/models";
import {Url} from '../UrlManager/UrlManager';

const authRequestSend = () => ({
  type: AUTH_REQUEST_SEND,
})
const authSuccess = (authStatus) => ({
  type: AUTH_SUCCESS,
  authStatus,
})
const authError = (error) => ({
  type: AUTH_ERROR,
  error,
})

export const authExecute = (): IThunkAction => (dispatch, getState, { api }) => {
  dispatch(authRequestSend())
  dispatch(api.get(Url.getAuthUrl()))
    .then((data: IAuthResponse = {}) => {
        dispatch(authSuccess(data.authStatus))
    },
      (error) => {
        console.log(error.message)
        dispatch(authError(error.message))
      })
}