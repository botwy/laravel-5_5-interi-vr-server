import {schema} from 'normalizr';
import {
  AUTH_REQUEST_SEND,
  AUTH_SUCCESS,
  AUTH_ERROR,
} from "../constants/actionTypes";
import {modelsGetSuccess} from "./modelFormatObjActions"

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

export const authExecute = () => (dispatch, getState, { api }) => {
  console.log("localhost:8000/auth")
  const options = {
    url: "/auth",
    scheme: {models: [modelEntity]},
  }
  dispatch(authRequestSend())
  dispatch(api.get(options))
    .then((data = {}) => {
        dispatch(authSuccess(data.authStatus))
        dispatch(modelsGetSuccess(data.models))
    },
      (error) => {
        console.log(error.message)
        dispatch(authError(error.message))
      })
}