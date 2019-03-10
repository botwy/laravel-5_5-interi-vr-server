import React, {Component} from "react";
import "./style.css";

interface IProps {
  onChangeEmail: () => void;
  onChangePassword: () => void;
  onClickSigninForm: () => void;
  email: string;
  password: string;
}

const SignInView: React.FunctionComponent<IProps> = (props) => (
  <div className="form-signin">
    <h2 className="form-signin-heading">Please login</h2>
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
    <label className="checkbox">
      <input
        type="checkbox"
        value="remember-me"
        id="rememberMe"
        name="rememberMe"
      />
      Remember me
    </label>
    <button
      className="btn btn-lg btn-primary btn-block"
      onClick={props.onClickSigninForm}
    >
      Login
    </button>
  </div>
);

export default SignInView;