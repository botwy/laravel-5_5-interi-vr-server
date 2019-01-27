import {handleActions, combineActions} from "redux-actions";
import {
  AUTH_REQUEST_SEND,
  AUTH_SUCCESS,
  AUTH_ERROR,
  USER_LOGIN_SUCCESS,
} from "../constants/actionTypes";

export const mainRouter = handleActions({
  [AUTH_REQUEST_SEND]: (state, action) => ({
    ...state,
    authStatus: false,
  }),
  [combineActions(
    AUTH_SUCCESS,
    USER_LOGIN_SUCCESS,
  )]: (state, action) => ({
    ...state,
    authStatus: action.authStatus,
  }),
  [AUTH_ERROR]: (state, action) => ({
    ...state,
    authStatus: false,
  }),
}, {})