import {
  MODELS_FORMAT_OBJ_GET_SUCCESS,
  MODEL_FORMAT_OBJ_CREATE_REQUEST_SEND,
  MODEL_FORMAT_OBJ_CREATE_SUCCESS,
  MODEL_FORMAT_OBJ_CREATE_ERROR,
  MODEL_FORMAT_OBJ_DELETE_REQUEST_SEND,
  MODEL_FORMAT_OBJ_DELETE_SUCCESS,
  MODEL_FORMAT_OBJ_DELETE_ERROR,
} from "../constants/actionTypes";
import axios from "axios/index";
import get from "lodash/get";

export const modelsGetSuccess = (models) => ({
  type: MODELS_FORMAT_OBJ_GET_SUCCESS,
  models,
})

const modelFormatObjCreateRequestSend = () => ({
  type: MODEL_FORMAT_OBJ_CREATE_REQUEST_SEND,
})
const modelFormatObjCreateSucces = (models) => ({
  type: MODEL_FORMAT_OBJ_CREATE_SUCCESS,
  models,
})
const modelFormatObjCreateError = () => ({
  type: MODEL_FORMAT_OBJ_CREATE_ERROR,
})

const modelFormatObjDeleteRequestSend = () => ({
  type: MODEL_FORMAT_OBJ_DELETE_REQUEST_SEND,
})
const modelFormatObjDeleteSucces = (models) => ({
  type: MODEL_FORMAT_OBJ_DELETE_SUCCESS,
  models,
})
const modelFormatObjDeleteError = () => ({
  type: MODEL_FORMAT_OBJ_DELETE_ERROR,
})

export const createModelFormatObj = (title, objModelFile) => (dispatch, getState, { api }) => {
  console.log("localhost:8000/modelFormatObj/create")
  console.log(objModelFile)
  dispatch(modelFormatObjCreateRequestSend())
  const formData = new FormData()
  formData.append("title", title)
  formData.append("objModelFile", objModelFile)
  formData.append("fileName", get(objModelFile, "name"))
  dispatch(api.post({url: "/modelFormatObj/create", data: formData}))
    .then((data = {}) => {
        if (data.status === "error") {
          dispatch(modelFormatObjCreateError())
        }
        dispatch(modelFormatObjCreateSucces(data.models))
      },
      (e) => dispatch(modelFormatObjCreateError(e.message))
    )
}

export const deleteModelFormatObj = (modelId) => (dispatch, getState, { api }) => {
  console.log("localhost:8000/modelFormatObj/delete")
  dispatch(modelFormatObjDeleteRequestSend())
  dispatch(api.post({url: "/modelFormatObj/delete", data: {modelId}}))
    .then((data = {}) => {
        if (data.status === "error") {
          dispatch(modelFormatObjDeleteError())
        }
        dispatch(modelFormatObjDeleteSucces(data.models))
      },
      (e) => dispatch(modelFormatObjDeleteError(e.message))
    )
}

