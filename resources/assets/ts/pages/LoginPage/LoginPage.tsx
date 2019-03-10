import React, {Component} from "react";
import "./style.css";
import SignInView from './SignInView';
import SignUpView from './SignUpView';

interface ILoginPageProps {
  loginExecute: (email: string, password: string) => void;
  changeTab: (selectedTabIndex: number) => void;
  onClickSigninForm: () => void;
  onChangeEmail: (e: any) => void;
  onChangePassword: (e: any) => void;
  onClickSignupForm: () => void;
  onChangeSignupEmail: (e: any) => void;
  onChangeSignupPassword: (e: any) => void;
  onChangeSignupRepeatingPassword: (e: any) => void;
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
    onChangeEmail,
    onChangePassword,
    onClickSignupForm,
    onChangeSignupEmail,
    onChangeSignupPassword,
    onChangeSignupRepeatingPassword,
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
              onChangeEmail={onChangeEmail}
              onChangePassword={onChangePassword}
              email={email}
              password={password}
            />
          :
           <SignUpView
             onClickSignupForm={onClickSignupForm}
             onChangeEmail={onChangeSignupEmail}
             onChangePassword={onChangeSignupPassword}
             onChangeRepeatingPassword={onChangeSignupRepeatingPassword}
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