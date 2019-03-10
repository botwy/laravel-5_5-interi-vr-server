import React, {Component} from "react";
import "./style.css";

interface IProps {
  onChangeEmail: () => void;
  onChangePassword: () => void;
  onChangeRepeatingPassword: () => void;
  onClickSignupForm: () => void;
  email: string;
  password: string;
  repeatingPassword: string;
}

const SignUpView: React.FunctionComponent<IProps> = (props) => (
  <div className="form-signin">
    <h2 className="form-signin-heading">Please create account</h2>
    <input
      type="text"
      className="form-control"
      name="username"
      placeholder="Email Address"
      required={false}
      autoFocus={false}
      value={props.email}
      onChange={props.onChangeEmail}
    />
    <input
      type="password"
      className="form-control"
      name="password"
      placeholder="Password"
      required={false}
      value={props.password}
      onChange={props.onChangePassword}
    />
    <input
      type="password"
      className="form-control"
      name="password"
      placeholder="Repeat password"
      required={false}
      value={props.repeatingPassword}
      onChange={props.onChangeRepeatingPassword}
    />
    <button
      className="btn btn-lg btn-primary btn-block"
      onClick={props.onClickSignupForm}
    >
      Create account
    </button>
  </div>
);

export default SignUpView;