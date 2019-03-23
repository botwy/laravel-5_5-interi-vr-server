import { IUrl } from '../UrlManager/models';

export class Url implements IUrl {
  static instance: IUrl;

  private host;
  private path;
  private serviceUrl: string;

  constructor(serviceUrl: string, path: string, host: string) {
    this.serviceUrl = serviceUrl;
    this.path = path;
    this.host = host;
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
}