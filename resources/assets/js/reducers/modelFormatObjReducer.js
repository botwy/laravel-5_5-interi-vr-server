import {handleActions} from "redux-actions";
import {
  MODELS_FORMAT_OBJ_GET_SUCCESS,
  MODEL_FORMAT_OBJ_CREATE_REQUEST_SEND,
  MODEL_FORMAT_OBJ_CREATE_SUCCESS,
  MODEL_FORMAT_OBJ_CREATE_ERROR,
} from "../constants/actionTypes";

export const modelFormatObj = handleActions({
  [MODELS_FORMAT_OBJ_GET_SUCCESS]: (state, action) => ({
    ...state,
    modelList: action.models,
  }),
  [MODEL_FORMAT_OBJ_CREATE_REQUEST_SEND]: (state, action) => ({
    ...state,
  }),
  [MODEL_FORMAT_OBJ_CREATE_SUCCESS]: (state, action) => ({
    ...state,
    modelList: action.models,
  }),
  [MODEL_FORMAT_OBJ_CREATE_ERROR]: (state, action) => ({
    ...state,
  }),
}, {})