export interface IModel {
    modelId: string;
    title: string;
}

export interface IRootState {

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