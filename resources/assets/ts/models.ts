export interface IUrl {
  getHost?():string;
  getPath():string;
  getUrlWithoutHost():string;
  getFullUrl():string;
}

interface IRootState {

}

export interface IMainRouterState {
    authStatus: boolean,
}
export interface IModelFormatObjState {
    modelList: string[],
}
export interface IEntityState {
    model3d: any,
}