import {
  MODELS_FORMAT_OBJ_GET_SUCCESS,
  MODEL_FORMAT_OBJ_CREATE_REQUEST_SEND,
  MODEL_FORMAT_OBJ_CREATE_SUCCESS,
  MODEL_FORMAT_OBJ_CREATE_ERROR,
  MODEL_FORMAT_OBJ_DELETE_REQUEST_SEND,
  MODEL_FORMAT_OBJ_DELETE_SUCCESS,
  MODEL_FORMAT_OBJ_DELETE_ERROR,
    MODELS_REQUEST_SEND,
    MODELS_SUCCESS,
    MODELS_ERROR,
} from "../constants/actionTypes";
import axios from "axios/index";
import get from "lodash/get";
import {IAuthResponse, IFetchModelResponse, IThunkAction} from "../common/interfaces";

const modelFormatObjCreateRequestSend = () => ({
  type: MODEL_FORMAT_OBJ_CREATE_REQUEST_SEND,
})
const modelFormatObjCreateSucces = (models) => ({
  type: MODEL_FORMAT_OBJ_CREATE_SUCCESS,
  models,
})
const modelFormatObjCreateError = (errorMsg?: string) => ({
  type: MODEL_FORMAT_OBJ_CREATE_ERROR,
  errorMsg,
})

const modelFormatObjDeleteRequestSend = () => ({
  type: MODEL_FORMAT_OBJ_DELETE_REQUEST_SEND,
})
const modelFormatObjDeleteSucces = (models) => ({
  type: MODEL_FORMAT_OBJ_DELETE_SUCCESS,
  models,
})
const modelFormatObjDeleteError = (errorMsg?: string) => ({
  type: MODEL_FORMAT_OBJ_DELETE_ERROR,
    errorMsg,
})

const modelsRequestSend = () => ({
    type: MODELS_REQUEST_SEND,
})
const modelsSucces = (models) => ({
    type: MODELS_SUCCESS,
    models,
})
const modelsError = (errorMsg?: string) => ({
    type: MODELS_ERROR,
    errorMsg,
})

export const createModelFormatObj = (title, objModelFile): IThunkAction => (dispatch, getState, { api }) => {
  console.log("localhost:8000/modelFormatObj/create")
  console.log(objModelFile)
  dispatch(modelFormatObjCreateRequestSend())
  const formData = new FormData()
  formData.append("title", title)
  formData.append("objModelFile", objModelFile)
  formData.append("fileName", get(objModelFile, "name"))
  dispatch(api.post("/modelFormatObj/create", {data: formData}))
    .then((data: IFetchModelResponse) => {
        if(!data) {
            throw new Error("data is undefined")
        }
        if (data.status === "error") {
          dispatch(modelFormatObjCreateError())
        }
        dispatch(modelFormatObjCreateSucces(data.models))
      },
      (e) => dispatch(modelFormatObjCreateError(e.message))
    )
}

export const deleteModelFormatObj = (modelId): IThunkAction => (dispatch, getState, { api }) => {
  console.log("localhost:8000/modelFormatObj/delete")
  dispatch(modelFormatObjDeleteRequestSend())
  dispatch(api.post("/modelFormatObj/delete", {data: {modelId}}))
    .then((data: IFetchModelResponse) => {
            if(!data) {
                throw new Error("data is undefined")
            }
        if (data.status === "error") {
          dispatch(modelFormatObjDeleteError())
        }
        dispatch(modelFormatObjDeleteSucces(data.models))
      },
      (e) => dispatch(modelFormatObjDeleteError(e.message))
    )
}

export const fetchModelsFormatObj = (): IThunkAction => (dispatch, getState, { api }) => {
    console.log("modelFormatObj/auth")
    const options = {
        //scheme: {models: [modelEntity]},
    }
    dispatch(modelsRequestSend())
    dispatch(api.get("/modelFormatObj/list", options))
        .then((data: IAuthResponse | undefined = {}) => {
                dispatch(modelsSucces(data.models))
            },
            (error) => {
                console.log(error.message)
                dispatch(modelsError(error.message))
            })
}

