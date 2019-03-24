import React, { Component } from "react";
import { connect } from "react-redux";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import * as loginActions from "../actions/loginActions";

interface IState {
  email: string;
  emailForSignup: string;
  password: string;
  passwordForSignup: string;
  repeatingPasswordForSignup: string;
  selectedTabIndex: number;
  errorMessage: string;
}

interface IStateProps {
  signupErrorMessage: string;
}

interface IDispatchProps {
  loginExecute: (email: string, password: string) => void;
  createAccount: (emailForSignup: string, passwordForSignup: string) => void;
}

class LoginPageContainer extends Component<IStateProps & IDispatchProps, IState> {
  state = {
    selectedTabIndex: 0,
    email: "",
    emailForSignup: "",
    password: "",
    passwordForSignup: "",
    repeatingPasswordForSignup: "",
    errorMessage: "",
  }
  changeTab = (selectedTabIndex) => {
    this.setState(  { selectedTabIndex });
  }

  changeEmail = (value: string) => { this.setState({email: value, errorMessage: ''}); }
  changePassword = (value: string) => { this.setState({password: value, errorMessage: ''}); }
  changeEmailForSignup = (value: string) => { this.setState({emailForSignup: value, errorMessage: ''}); }
  changePasswordForSignup = (value: string) => {
    this.setState({passwordForSignup: value, errorMessage: ''});
  }
  changeRepeatingPasswordForSignup = (value: string) => {
    this.setState({repeatingPasswordForSignup: value, errorMessage: ''});
  }

  onClickSigninForm = () => {
    const {email, password} = this.state;
    this.props.loginExecute(email, password);
  }
  onClickSignupForm = () => {
    const {emailForSignup, passwordForSignup, repeatingPasswordForSignup} = this.state;
    if (passwordForSignup !== repeatingPasswordForSignup) {
      this.setState({errorMessage: 'пароль не совпадает с повторным паролем'});
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
        changeEmail={this.changeEmail}
        changePassword={this.changePassword}
        changeEmailForSignup={this.changeEmailForSignup}
        changePasswordForSignup={this.changePasswordForSignup}
        changeRepeatingPasswordForSignup={this.changePasswordForSignup}
        onClickSigninForm={this.onClickSigninForm}
        onClickSignupForm={this.onClickSignupForm}
      />
    );
  }
}

const mapStateToProps = state => {
  const {signupError, signupErrorMessage} = state.user;

  return {
    signupErrorMessage: signupError ? signupErrorMessage : '',
  }
};

const mapDispatchToProps = loginActions;

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer)