import React, {Component} from "react";
import "./style.css";
import InputText from '../../components/InputText';

interface IProps {
  changeEmailForSignup: (value: string) => void;
  changePasswordForSignup: (value: string) => void;
  changeRepeatingPasswordForSignup: (value: string) => void;
  onClickSignupForm: () => void;
  email: string;
  password: string;
  repeatingPassword: string;
  errorMessage: string;
}

const SignUpView: React.FunctionComponent<IProps> = (props) => (
  <div className="form-signin">
    <h2 className="form-signin-heading">Please create account</h2>
    <InputText
      onChange={props.changeEmailForSignup}
      type="text"
      placeholder="Email Address"
      value={props.email}
    />
    <InputText
      onChange={props.changePasswordForSignup}
      type="password"
      placeholder="Password"
      value={props.password}
    />
    <InputText
      onChange={props.changeRepeatingPasswordForSignup}
      type="password"
      placeholder="Repeat password"
      value={props.repeatingPassword}
    />
    <button
      className="btn btn-lg btn-primary btn-block"
      onClick={props.onClickSignupForm}
    >
      Create account
    </button>
    {!!props.errorMessage &&
    <div>{props.errorMessage}</div>
    }
  </div>
);

export default SignUpView;