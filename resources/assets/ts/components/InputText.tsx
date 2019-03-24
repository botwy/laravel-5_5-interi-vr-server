import React, {Component} from "react";
import "./style.css";

interface IProps {
  onChange: (value: string) => void;
  type: string;
  placeholder: string;
  value: string;
}

class InputText extends Component<IProps> {

  onChange = (e) => {
    const { onChange} = this.props;
    const newValue = e.target.value;

    onChange(newValue);
  }
  render () {
    const { type, placeholder, value} = this.props;

    return (
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        required={false}
        autoFocus={false}
        value={value}
        onChange={this.onChange}
      />

    );
  }
}

export default InputText;