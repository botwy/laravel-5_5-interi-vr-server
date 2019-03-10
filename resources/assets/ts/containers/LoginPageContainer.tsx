import React, { Component } from "react";
import { connect } from "react-redux";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import * as loginActions from "../actions/loginActions";

interface IChangedData {
  [key: string]: string;
}

interface IState {
  email: string;
  password: string;
  emailForSignup: string,
  passwordForSignup: string,
  repeatingPasswordForSignup: string,
  selectedTabIndex: number;
  [key: string]: string | number;
}

interface IDispatchProps {
  loginExecute: (email: string, password: string) => void;
  createAccount: (emailForSignup: string, passwordForSignup: string) => void;
}

class LoginPageContainer extends Component<IDispatchProps, IState> {
  state = {
    selectedTabIndex: 0,
    email: "",
    emailForSignup: "",
    password: "",
    passwordForSignup: "",
    repeatingPasswordForSignup: "",
  }
  changeTab = (selectedTabIndex) => {
    this.setState(  { selectedTabIndex });
  }
  onChangeInput = (changedData: IChangedData) => {
    this.setState(changedData);
  }
  onClickSigninForm = () => {
    const {email, password} = this.state;
    this.props.loginExecute(email, password);
  }
  onClickSignupForm = () => {
    const {emailForSignup, passwordForSignup, repeatingPasswordForSignup} = this.state;
    if (passwordForSignup !== repeatingPasswordForSignup) {
      return;
    }
    this.props.createAccount(emailForSignup, passwordForSignup);
  }
  render() {
    return (
      <LoginPage
        {...this.props}
        {...this.state}
        changeTab={this.changeTab}
        onChangeInput={this.onChangeInput}
        onClickSigninForm={this.onClickSigninForm}
        onClickSignupForm={this.onClickSignupForm}
      />
    );
  }
}

const mapDispatchToProps = loginActions;

export default connect(undefined, mapDispatchToProps)(LoginPageContainer)