import {handleActions} from "redux-actions";
import {
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST_SEND,
  USER_LOGIN_SUCCESS,
} from "../constants/actionTypes";
import get from "lodash/get";

export const user = handleActions({
  [USER_LOGIN_REQUEST_SEND]: (state, action) => ({
    ...state,
  }),
  [USER_LOGIN_SUCCESS]: (state, action) => {
    const { auth, email } = action.user;
    return ({
      ...state,
      isLogin: auth,
      email,
    });
  },
  [USER_LOGIN_ERROR]: (state, action) => ({
    ...state,
  })
}, {})