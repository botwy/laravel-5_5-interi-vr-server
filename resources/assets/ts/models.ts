import {InputFieldNames} from './enums';

export interface IModel {
    modelId: string;
    title: string;
}

export interface IRootState {

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
    model3d: any,
}

export interface IInputField {
    [InputFieldNames.email]: string;
    [InputFieldNames.password]: string;
    [InputFieldNames.emailForSignup]: string;
    [InputFieldNames.passwordForSignup]: string;
    [InputFieldNames.repeatingPasswordForSignup]: string;
}