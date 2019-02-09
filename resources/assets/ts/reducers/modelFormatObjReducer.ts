import {handleActions} from "redux-actions";
import {
    MODELS_FORMAT_OBJ_GET_SUCCESS,
    MODEL_FORMAT_OBJ_CREATE_REQUEST_SEND,
    MODEL_FORMAT_OBJ_CREATE_SUCCESS,
    MODEL_FORMAT_OBJ_CREATE_ERROR,
    MODEL_FORMAT_OBJ_DELETE_REQUEST_SEND,
    MODEL_FORMAT_OBJ_DELETE_SUCCESS,
    MODEL_FORMAT_OBJ_DELETE_ERROR,
    MODELS_REQUEST_SEND,
    MODELS_ERROR,
    MODELS_SUCCESS,
} from "../constants/actionTypes";
import {IModelFormatObjState} from '../models'
export const modelFormatObj = handleActions<IModelFormatObjState, {models: string[]}>({
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
  [MODEL_FORMAT_OBJ_DELETE_REQUEST_SEND]: (state, action) => ({
    ...state,
  }),
  [MODEL_FORMAT_OBJ_DELETE_SUCCESS]: (state, action) => ({
    ...state,
    modelList: action.models,
  }),
  [MODEL_FORMAT_OBJ_DELETE_ERROR]: (state, action) => ({
    ...state,
  }),
    [MODELS_REQUEST_SEND]: (state, action) => ({
        ...state,
    }),
    [MODELS_SUCCESS]: (state, action) => ({
        ...state,
        modelList: action.models,
    }),
    [MODELS_ERROR]: (state, action) => ({
        ...state,
    }),
}, {
  modelList: [],
})