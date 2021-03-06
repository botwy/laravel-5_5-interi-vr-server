import axios, {AxiosPromise} from 'axios'
import { fetch } from 'fetch'
import { normalize } from 'normalizr'
import {IRequestOptions, IDispatch, IThunkAction} from './models';
import {
  MERGE_ENTITIES
} from "../constants/actionTypes";
import { IUrl } from '../UrlManager/models';
const requestExecute = (options: IRequestOptions = {}, dispatch: IDispatch): Promise<any> => {
  const { scheme, converterForNormalize, ...requestOptions } = options;

  return axios(requestOptions)
    .then(response => {

        if (response.data.status === 'error') {
            throw new Error(response.data.message);
        }

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
        throw new Error(error)
      })
}

export const get = (url: IUrl, options: IRequestOptions): IThunkAction => dispatch => {
  return requestExecute({ ...options, method: 'get', url: url.getUrlWithoutHost() }, dispatch)
}

export const post = (url: IUrl, options: IRequestOptions): IThunkAction => dispatch => {
  return requestExecute({ ...options, method: 'post', url: url.getUrlWithoutHost() }, dispatch)
}