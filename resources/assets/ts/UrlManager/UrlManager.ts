import { IUrl } from '../models';
const host = 'http://localhost:5656';
const path = '';

export class Url implements IUrl {
  static instance: IUrl;

  private host = host;
  private path = path;
  private serviceUrl: string;

  constructor(serviceUrl: string) {
    this.serviceUrl = serviceUrl;
  }

  getPath():string {
    return this.path;
  }
  getUrlWithoutHost():string {
    return this.path + this.serviceUrl;
  }
  getFullUrl():string {
    return this.host + this.path + this.serviceUrl;
  }

  static getLoginUrl() {
    return new Url('/login')
  }

  static getCreateAccountUrl() {
    return new Url('/createAccount')
  }

  static getAuthUrl() {
    return new Url('/auth')
  }

  static getModelObjListUrl() {
    return new Url('/modelFormatObj/list')
  }

  static getModelObjCreateUrl() {
    return new Url('/modelFormatObj/create')
  }

  static getModelObjDeleteUrl() {
    return new Url('/modelFormatObj/delete')
  }

}

enum SERVICES {
  login = '/login',
  createAccount = '/createAccount',
  auth = '/auth',
  modelList = '/modelFormatObj/list',
  modelCreate = '/modelFormatObj/create',
  modelDelete = '/modelFormatObj/delete',
}

const createUrlKeyValue = (serviceName: SERVICES, url: IUrl = new Url(`/${serviceName}`)) => {
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

export const getUrlByServiceName = (serviceName: SERVICES) => mapServiceNameToUrl[serviceName];