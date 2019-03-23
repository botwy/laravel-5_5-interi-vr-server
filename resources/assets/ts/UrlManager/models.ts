export interface IUrl {
  getHost?():string;
  getPath():string;
  getUrlWithoutHost():string;
  getFullUrl():string;
}
