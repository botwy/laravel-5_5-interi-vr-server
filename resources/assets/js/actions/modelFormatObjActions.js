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

export const createModelFormatObj = (title, objModelFile) => (dispatch) => {
  console.log("localhost:8000/modelFormatObj/create")
  console.log(objModelFile)
  dispatch(modelFormatObjCreateRequestSend())
  const formData = new FormData()
  formData.append("title", title)
  formData.append("objModelFile", objModelFile)
  formData.append("fileName", get(objModelFile, "name"))
  axios.post("/modelFormatObj/create", formData)
    .then(value => {
        if (get(value, "data.status") === "error") {
          dispatch(modelFormatObjCreateError())
        }
        const models = get(value, "data.models");
        dispatch(modelFormatObjCreateSucces(models))
      },
      (e) => dispatch(modelFormatObjCreateError())
    )
}

export const deleteModelFormatObj = (modelId) => (dispatch) => {
  console.log("localhost:8000/modelFormatObj/delete")
  dispatch(modelFormatObjDeleteRequestSend())
  axios.post("/modelFormatObj/delete", {modelId})
    .then(value => {
        if (get(value, "data.status") === "error") {
          dispatch(modelFormatObjDeleteError())
        }
        const models = get(value, "data.models");
        dispatch(modelFormatObjDeleteSucces(models))
      },
      (e) => dispatch(modelFormatObjDeleteError())
    )
}

