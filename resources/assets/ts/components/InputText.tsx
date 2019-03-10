import React, {Component} from "react";
import "./style.css";

interface IChangedData {
  [key: string]: string;
}
interface IProps {
  onChange: (changedData: IChangedData) => void;
  type: string;
  fieldName: string;
  placeholder: string;
  value: string;
}

class InputText extends Component<IProps> {

  onChange = (e) => {
    const { fieldName, onChange} = this.props;

    const newValue = e.target.value;
    const changedData = {
      [fieldName]: newValue,
    }

    onChange(changedData);
  }
  render () {
    const { type, fieldName, placeholder, value} = this.props;

    return (
      <input
        type={type}
        className="form-control"
        name={fieldName}
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