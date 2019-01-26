import React, {Component} from "react";
import LoginPage from "../containers/LoginPageContainer"
import ModelObjFormatList from "../containers/ModelObjFormatListContainer"

export class MainRouterPage extends Component {
  render() {
    if (this.props.isLogin) {
      return (
        <ModelObjFormatList/>
      );
    }

    return (
      <LoginPage/>
    );
  }
}
