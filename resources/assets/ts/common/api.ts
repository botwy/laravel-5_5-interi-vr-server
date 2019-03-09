import axios, {AxiosPromise} from 'axios'
import { normalize } from 'normalizr'
import {IRequestOptions, IDispatch, IThunkAction} from './interfaces';
import {
  MERGE_ENTITIES
} from "../constants/actionTypes";

const requestExecute = (options: IRequestOptions = {}, dispatch: IDispatch): Promise<any> => {
  const { scheme, converterForNormalize, ...requestOptions } = options;

  return axios(requestOptions)
    .then(response => {
        if (!scheme) { return response.data }

        const dataForNormalize = converterForNormalize ? converterForNormalize(response.data) : response.data
      const normal = normalize(dataForNormalize, { entityList:[scheme] })
        dispatch({
            type: MERGE_ENTITIES,
            entityData: normal.entities,
            entityName: Object.keys(normal.entities)[0],
        })

        return { fetchingIds: normal.result.entityList };
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