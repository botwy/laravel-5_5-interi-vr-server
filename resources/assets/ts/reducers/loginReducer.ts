import {handleActions} from "redux-actions";
import {
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST_SEND,
  USER_LOGIN_SUCCESS,
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_FAILURE,
} from "../constants/actionTypes";

export const user = handleActions({
  [USER_LOGIN_REQUEST_SEND]: (state, action) => ({
    ...state,
  }),
  [USER_LOGIN_SUCCESS]: (state, action) => {
    return ({
      ...state,
    });
  },
  [USER_LOGIN_ERROR]: (state, action) => ({
    ...state,
  }),
},
{});
