import React, {Component} from "react";
import "./style.css";
import SignInView from './SignInView';
import SignUpView from './SignUpView';
import { SERVICES } from '../../UrlManager/index';



interface IChangedData {
  [key: string]: string;
}

interface ILoginPageProps {
  loginExecute: (email: string, password: string) => void;
  changeTab: (selectedTabIndex: number) => void;
  onClickSigninForm: () => void;
  onChangeInput: (changedData: IChangedData) => void;
  onClickSignupForm: () => void;
  email: string;
  password: string;
  emailForSignup: string,
  passwordForSignup: string,
  repeatingPasswordForSignup: string,
  selectedTabIndex: number;
}

export class LoginPage extends Component<ILoginPageProps> {

  selectSignInTab = () => { this.props.changeTab(0) };

  selectSignUpTab = () => { this.props.changeTab(1) };

  render() {
  const {
    selectedTabIndex,
    onClickSigninForm,
    onChangeInput,
    onClickSignupForm,
    email,
    password,
    emailForSignup,
    passwordForSignup,
    repeatingPasswordForSignup,
  } = this.props;

    return (
      <div className="wrapper">
        <div className="form-container">
          <div>
            <ul className="tab">
              <li role="tab"  className={selectedTabIndex === 0 ? "tab-enable" : "tab-disable border-right"}>
                <a onClick={this.selectSignInTab}>Sign in</a>
              </li>
              <li role="tab" className={selectedTabIndex === 1 ? "tab-enable" : "tab-disable border-left"}>
                <a  onClick={this.selectSignUpTab}>Sign up</a>
              </li>
            </ul>
          </div>
          {selectedTabIndex === 0 ?
            <SignInView
              onClickSigninForm={onClickSigninForm}
              onChangeInput={onChangeInput}
              email={email}
              password={password}
            />
          :
           <SignUpView
             onClickSignupForm={onClickSignupForm}
             onChangeInput={onChangeInput}
             email={emailForSignup}
             password={passwordForSignup}
             repeatingPassword={repeatingPasswordForSignup}
           />
          }
        </div>
      </div>
    );
  }
}