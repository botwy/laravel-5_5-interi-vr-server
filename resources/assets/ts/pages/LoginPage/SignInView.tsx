import React, {Component} from "react";
import "./style.css";
import InputText from '../../components/InputText';

interface IChangedData {
  [key: string]: string;
}

interface IProps {
  onChangeInput: (changedData: IChangedData) => void;
  onClickSigninForm: () => void;
  email: string;
  password: string;
}

const SignInView: React.FunctionComponent<IProps> = (props) => (
  <div className="form-signin">
    <h2 className="form-signin-heading">Please login</h2>
    <InputText
      onChange={props.onChangeInput}
      type="text"
      fieldName="email"
      placeholder="Email Address"
      value={props.email}
    />
    <InputText
      onChange={props.onChangeInput}
      type="password"
      fieldName="password"
      placeholder="Password"
      value={props.password}
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