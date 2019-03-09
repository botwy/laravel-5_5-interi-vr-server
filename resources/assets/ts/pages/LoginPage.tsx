import React, {Component} from "react";
import "./loginPage/style.css";

interface ILoginPageState {
  email: string;
  password: string;
}

interface ILoginPageProps {
  loginExecute: (email: string, password: string) => void;
}

export class LoginPage extends Component<ILoginPageProps, ILoginPageState> {
  state = {
    email: "",
    password: "",
  }

  onClickSigninForm = () => {
    const {email, password} = this.state;
    console.log("on click")
    this.props.loginExecute(email, password);
  }
  onChangeEmail = (e) => {
    console.log(e)
    this.setState({email: e.target.value})
  }
  onChangePassword = (e) => {
    this.setState({password: e.target.value})
  }

  render() {

    return (
      <div className="wrapper">
        <div className="form-signin">
          <h2 className="form-signin-heading">Please login</h2>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Email Address"
            required=""
            autoFocus=""
            onChange={this.onChangeEmail}
          />
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required=""
            onChange={this.onChangePassword}
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
            onClick={this.onClickSigninForm}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}