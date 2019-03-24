import React, {Component} from "react";
import "./style.css";
import SignInView from './SignInView';
import SignUpView from './SignUpView';
import { InputFieldNames } from "../../enums";
import { SERVICES } from '../../UrlManager/index';

interface ILoginPageProps {
  loginExecute: (email: string, password: string) => void;
  changeTab: (selectedTabIndex: number) => void;
  onClickSigninForm: () => void;
  changeEmail: (value: string) => void;
  changePassword: (value: string) => void;
  changeEmailForSignup: (value: string) => void;
  changePasswordForSignup: (value: string) => void;
  changeRepeatingPasswordForSignup: (value: string) => void;
  onClickSignupForm: () => void;
  email: string;
  password: string;
  emailForSignup: string,
  passwordForSignup: string,
  repeatingPasswordForSignup: string,
  selectedTabIndex: number;
  signupErrorMessage: string;
  errorMessage: string;
}

export class LoginPage extends Component<ILoginPageProps> {

  selectSignInTab = () => { this.props.changeTab(0) };

  selectSignUpTab = () => { this.props.changeTab(1) };

  render() {
  const {
    selectedTabIndex,
    onClickSigninForm,
    changeEmail,
    changePassword,
    changeEmailForSignup,
    changePasswordForSignup,
    changeRepeatingPasswordForSignup,
    onClickSignupForm,
    email,
    password,
    emailForSignup,
    passwordForSignup,
    repeatingPasswordForSignup,
    signupErrorMessage,
    errorMessage,
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
              changeEmail={changeEmail}
              changePassword={changePassword}
              email={email}
              password={password}
            />
          :
           <SignUpView
             onClickSignupForm={onClickSignupForm}
             changeEmailForSignup={changeEmailForSignup}
             changePasswordForSignup={changePasswordForSignup}
             changeRepeatingPasswordForSignup={changeRepeatingPasswordForSignup}
             email={emailForSignup}
             password={passwordForSignup}
             repeatingPassword={repeatingPasswordForSignup}
             errorMessage={errorMessage || signupErrorMessage}
           />
          }
        </div>
      </div>
    );
  }
}