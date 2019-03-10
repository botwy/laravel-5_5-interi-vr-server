import React, {Component} from "react";
import "./style.css";
import InputText from '../../components/InputText';

interface IChangedData {
  [key: string]: string;
}

interface IProps {
  onChangeInput: (changedData: IChangedData) => void;
  onClickSignupForm: () => void;
  email: string;
  password: string;
  repeatingPassword: string;
}

const SignUpView: React.FunctionComponent<IProps> = (props) => (
  <div className="form-signin">
    <h2 className="form-signin-heading">Please create account</h2>
    <InputText
      onChange={props.onChangeInput}
      type="text"
      fieldName="emailForSignup"
      placeholder="Email Address"
      value={props.email}
    />
    <InputText
      onChange={props.onChangeInput}
      type="password"
      fieldName="passwordForSignup"
      placeholder="Password"
      value={props.password}
    />
    <InputText
      onChange={props.onChangeInput}
      type="password"
      fieldName="repeatingPasswordForSignup"
      placeholder="Repeat password"
      value={props.repeatingPassword}
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