import {
  MODELS_FORMAT_OBJ_GET_SUCCESS,
  MODEL_FORMAT_OBJ_CREATE_REQUEST_SEND,
  MODEL_FORMAT_OBJ_CREATE_SUCCESS,
  MODEL_FORMAT_OBJ_CREATE_ERROR,
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

export const createModelFormatObj = (title, objModelFile) => (dispatch) => {
  console.log("localhost:8000/modelFormatObj/create")
  dispatch(modelFormatObjCreateRequestSend())
  axios.post("/modelFormatObj/create", {title, objModelFile})
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