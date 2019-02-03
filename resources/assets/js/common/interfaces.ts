import {Schema} from "normalizr";
import {AxiosRequestConfig} from "axios";
import {Action, AnyAction, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

export interface IDispatch extends Dispatch {
    (async: IThunkAction): any;
}

export interface IRequestOptions extends AxiosRequestConfig {
    scheme?: Schema,
    converterForNormalize?: (data: any) => any,
}

interface IAsyncAction extends AnyAction {

}
export interface IApi {
    get: (url: string, options?: IRequestOptions) => IThunkAction,
    post: (url: string, options?: IRequestOptions) => any,
}
export interface IThunkExtraArgument {
    api: IApi,
}
export interface IThunkAction extends ThunkAction<any, any, IThunkExtraArgument, any> {

}