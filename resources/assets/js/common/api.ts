import axios, {AxiosPromise} from 'axios'
import {normalize} from 'normalizr'
import {IRequestOptions, IDispatch, IThunkAction} from './interfaces';

interface ICommon {
    (name: string): string;
    title: string;
    count: number;

    comments: Array<string>;
}

let a: ICommon = <ICommon> ((name: string) => "");
a.title = ""
a.count = 1
a.comments = [""]


const requestExecute = (options: IRequestOptions = {}, dispatch: IDispatch): Promise<any> => {
  const { scheme, converterForNormalize, ...requestOptions } = options;

  return axios(requestOptions)
    .then(response => {
        console.log(response)
        dispatch({type: "LOG FOR METHOD " + options.method})
        if (!scheme) { return response.data }

        const dataForNormalize = converterForNormalize ? converterForNormalize(response.data) : response.data
        console.log(dataForNormalize)
        dispatch({type: "LOG FOR NORMALIZE"})
        console.log(normalize(dataForNormalize, scheme))
        return normalize(dataForNormalize, scheme)
      },
      error => {
        console.log(error.message)
        throw new Error(error)
      })
}

export const get = (url: string, options: IRequestOptions): IThunkAction => dispatch => {
  return requestExecute({ ...options, method: 'get', url }, dispatch)
}

export const post = (url: string, options: IRequestOptions): IThunkAction => dispatch => {
  return requestExecute({ ...options, method: 'post', url }, dispatch)
}