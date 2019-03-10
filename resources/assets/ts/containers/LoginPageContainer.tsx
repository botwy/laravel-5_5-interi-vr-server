import React, { Component } from "react";
import { connect } from "react-redux";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import * as loginActions from "../actions/loginActions";

interface IState {
  email: string;
  password: string;
  emailForSignup: string,
  passwordForSignup: string,
  repeatingPasswordForSignup: string,
  selectedTabIndex: number;
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
  onChangeEmail = (e) => {
    console.log(e)
    this.setState({email: e.target.value})
  }
  onChangePassword = (e) => {
    this.setState({password: e.target.value})
  }
  onClickSigninForm = () => {
    const {email, password} = this.state;
    this.props.loginExecute(email, password);
  }
  onChangeSignupEmail = (e) => {
    console.log(e)
    this.setState({emailForSignup: e.target.value})
  }
  onChangeSignupPassword = (e) => {
    this.setState({passwordForSignup: e.target.value})
  };
  onChangeSignupRepeatingPassword = (e) => {
    this.setState({repeatingPasswordForSignup: e.target.value})
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
        onChangeEmail={this.onChangeEmail}
        onChangePassword={this.onChangePassword}
        onClickSigninForm={this.onClickSigninForm}
        onChangeSignupEmail={this.onChangeSignupEmail}
        onChangeSignupPassword={this.onChangeSignupPassword}
        onChangeSignupRepeatingPassword={this.onChangeSignupRepeatingPassword}
        onClickSignupForm={this.onClickSignupForm}
      />
    );
  }
}

const mapDispatchToProps = loginActions;

export default connect(undefined, mapDispatchToProps)(LoginPageContainer)