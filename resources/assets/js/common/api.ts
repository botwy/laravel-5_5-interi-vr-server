import axios from 'axios'
import {normalize} from 'normalizr'
import {IRequestOptions, IDispatch, IThunkAction} from './interfaces';


const requestExecute = (options: IRequestOptions = {}, dispatch: IDispatch) => {
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
  return requestExecute({ method: 'get', url, ...options }, dispatch)
}

export const post = (url: string, options: IRequestOptions): IThunkAction => dispatch => {
  return requestExecute({ method: 'post', url, ...options }, dispatch)
}