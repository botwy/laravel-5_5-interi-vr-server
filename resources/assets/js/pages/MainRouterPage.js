import React, {Component} from "react";
import LoginPage from "../containers/LoginPageContainer"
import ModelObjFormatList from "../containers/ModelObjFormatListContainer"

export class MainRouterPage extends Component {
  componentDidMount() {
    this.props.authExecute()
  }

  render() {
    if (this.props.authStatus) {
      return (
        <ModelObjFormatList/>
      );
    }

    return (
      <LoginPage/>
    );
  }
}
