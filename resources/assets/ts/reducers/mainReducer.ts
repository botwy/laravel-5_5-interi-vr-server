import { combineReducers } from "redux";
import {user} from "./loginReducer";
import {mainRouter} from "./mainRouterReducer";
import {modelFormatObj} from "./modelFormatObjReducer";

export const reducer = combineReducers({
  mainRouter,
  user,
  modelFormatObj,
})