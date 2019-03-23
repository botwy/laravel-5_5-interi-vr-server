import React, {Component} from "react";
import LoginPage from "../containers/LoginPageContainer"
import ModelObjFormatList from "../containers/ModelObjFormatListContainer"

interface IProps {
  authStatus: boolean;
  authExecute: () => void;
}

export class MainRouterPage extends Component<IProps> {
  componentDidMount() {
    this.props.authExecute()
  }

  render() {
    const { authStatus } = this.props;

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
