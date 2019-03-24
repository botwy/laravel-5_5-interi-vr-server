import {handleActions, combineActions, ReducerMapValue, Reducer, CombinedActionType} from "redux-actions";
import {
  AUTH_REQUEST_SEND,
  AUTH_SUCCESS,
  AUTH_ERROR,
  USER_LOGIN_SUCCESS, CREATE_ACCOUNT_REQUEST, CREATE_ACCOUNT_FAILURE,
} from "../constants/actionTypes";
import { IMainRouterState } from '../models';

interface IPayload {
  error?: string;
  authStatus?: boolean;
}
const initialMainRouterState: IMainRouterState = {
  authStatus: undefined,
  signupError: true,
  signupErrorMessage: '',
}
export const mainRouter = handleActions<IMainRouterState, IPayload>({
  [AUTH_REQUEST_SEND]: (state) => state,
  [combineActions(AUTH_SUCCESS, USER_LOGIN_SUCCESS)]: (state, action) => ({
    ...state,
    authStatus: action.authStatus,
  }),
  [AUTH_ERROR]: (state, action) => ({
    ...state,
    authStatus: false,
  }),
  [CREATE_ACCOUNT_REQUEST]: (state, action) => ({
    ...state,
    signupError: false,
    signupErrorMessage: '',
  }),
  [CREATE_ACCOUNT_FAILURE]: (state, action) => ({
    ...state,
    signupError: true,
    signupErrorMessage: action.error,
  })
}, initialMainRouterState)