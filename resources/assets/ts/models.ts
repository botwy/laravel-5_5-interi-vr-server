export interface IRootState {
  mainRouter: IMainRouterState;
  modelFormatObj: IModelFormatObjState;
  entity: IEntityState;
}

export interface IMainRouterState {
  authStatus: boolean,
  signupError: boolean,
  signupErrorMessage: string,
}
export interface IModelFormatObjState {
    modelList: string[],
}
export interface IEntityState {
    model3d: {
      [key: string]: IModel;
    },
}

export interface IModel {
  id: string;
  title: string;
}
