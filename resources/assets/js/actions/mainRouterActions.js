import axios from "axios/index";
import {
  AUTH_REQUEST_SEND,
  AUTH_SUCCESS,
  AUTH_ERROR,
} from "../constants/actionTypes";
import {modelsGetSuccess} from "./modelFormatObjActions"

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

export const authExecute = () => (dispatch) => {
  console.log("localhost:8000/auth")
  dispatch(authRequestSend())
  axios.get("/auth")
    .then((value = {}) => {
      const authData = value.data || {};

        dispatch(authSuccess(authData.authStatus))
        dispatch(modelsGetSuccess(authData.models))
    },
      (e) => dispatch(authError(e))
      )
}