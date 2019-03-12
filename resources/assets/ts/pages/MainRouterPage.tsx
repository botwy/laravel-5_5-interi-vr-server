import React, {Component} from "react";
import LoginPage from "../containers/LoginPageContainer"
import ModelObjFormatList from "../containers/ModelObjFormatListContainer"
import {IThunkAction} from "../common/interfaces";
import { test } from '../utils/Example';

interface IDispatchProps {
  authExecute: () => IThunkAction;
}

interface IStateProps {
  authStatus: () => IThunkAction;
}

export class MainRouterPage extends Component<IDispatchProps & IStateProps> {
  componentDidMount() {
    this.props.authExecute()
  }

  render() {
    const { authStatus } = this.props;
test();
    if (authStatus == undefined) {
      return <div>...</div>
    }
    if (authStatus) {
      return (
        <ModelObjFormatList/>
      );
    }

    return (
      <LoginPage/>
    );
  }
}
