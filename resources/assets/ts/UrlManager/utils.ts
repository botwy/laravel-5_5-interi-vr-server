import {IUrl} from "./models";
import {Url} from "./Url";
import { SERVICES, PATH, HOST } from './constants';

const createUrlKeyValue = (
  serviceName: SERVICES,
  url: IUrl = new Url(`/${serviceName}`, PATH, HOST)
) => {
  console.log(url)
  return ({
    [serviceName]: url,
  });
}

const mapServiceNameToUrl = {
  ...createUrlKeyValue(SERVICES.login),
  ...createUrlKeyValue(SERVICES.createAccount),
  ...createUrlKeyValue(SERVICES.auth),
  ...createUrlKeyValue(SERVICES.modelList),
  ...createUrlKeyValue(SERVICES.modelCreate),
  ...createUrlKeyValue(SERVICES.modelDelete),
}

export const getUrlByServiceName = (serviceName: SERVICES):IUrl => mapServiceNameToUrl[serviceName];