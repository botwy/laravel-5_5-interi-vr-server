import {Schema} from "normalizr";
import {AxiosRequestConfig} from "axios";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import { IUrl } from '../models';

export interface IDispatch extends Dispatch {}

export interface IRequestOptions extends AxiosRequestConfig {
    scheme?: Schema,
    converterForNormalize?: (data: any) => any,
}
export interface IApi {
    get: (url: IUrl, options?: IRequestOptions) => any,
    post: (url: IUrl, options?: IRequestOptions) => any,
}
export interface IThunkExtraArgument {
    api: IApi,
}
export interface IThunkAction extends ThunkAction<any, any, IThunkExtraArgument, any> {

}

interface IModel {

}
export interface IAuthResponse {
    authStatus?: boolean;
    models?: IModel[];
    fetchingIds?: IModel[];
}
export interface IFetchModelResponse {
    status:string;
    models?: IModel[];
}