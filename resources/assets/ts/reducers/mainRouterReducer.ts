import {handleActions, combineActions, ReducerMapValue, Reducer, CombinedActionType} from "redux-actions";
import {
  AUTH_REQUEST_SEND,
  AUTH_SUCCESS,
  AUTH_ERROR,
  USER_LOGIN_SUCCESS,
} from "../constants/actionTypes";
import { IMainRouterState } from '../models';

const initialMainRouterState: IMainRouterState = {
  authStatus: false,
}
export const mainRouter = handleActions<IMainRouterState>({
  [AUTH_REQUEST_SEND]: (state, action) => ({
    ...state,
    authStatus: false,
  }),
  [combineActions(AUTH_SUCCESS, USER_LOGIN_SUCCESS)]: (state, action) => ({
    ...state,
    authStatus: action.authStatus,
  }),
  [AUTH_ERROR]: (state, action) => ({
    ...state,
    authStatus: false,
  }),
}, initialMainRouterState)