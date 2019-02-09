import {schema} from 'normalizr';
import {
  AUTH_REQUEST_SEND,
  AUTH_SUCCESS,
  AUTH_ERROR,
} from "../constants/actionTypes";
import {modelsGetSuccess} from "./modelFormatObjActions"
import {IAuthResponse, IThunkAction} from "../common/interfaces";

const modelEntity = new schema.Entity("models")

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
  console.log("localhost:8000/auth")
  const options = {
    //scheme: {models: [modelEntity]},
  }
  dispatch(authRequestSend())
  dispatch(api.get("/auth", options))
    .then((data: IAuthResponse | undefined = {}) => {
        dispatch(authSuccess(data.authStatus))
    },
      (error) => {
        console.log(error.message)
        dispatch(authError(error.message))
      })
}