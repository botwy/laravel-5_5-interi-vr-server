import React, { Component } from 'react';
import "./loginPage/style.css";

interface IRadioItemProps {
  index: number;
  isSelected: boolean;
  value: string;
  changeSelectedIndex: (selectedIndex: number) => void;
}

interface IRadioGroupProps {
  options: string[];
  selectedIndex: number;
  changeSelectedIndex: (selectedIndex: number) => void;
}

interface IModalPage {
  onPress: () => void;
  selectedIndex: number;
}

class RadioItem extends Component<IRadioItemProps> {
  changeSelectedIndex = () => {
    const { index, changeSelectedIndex } = this.props;

    changeSelectedIndex(index);
  }

  render() {
    const { isSelected, value } = this.props;

    return(
      <label>
        <input
          type="radio"
          value={value}
          checked={isSelected}
          onClick={this.changeSelectedIndex}/>
        {value}
      </label>
    );
  }
}
const RadioGroup: React.FunctionComponent<IRadioGroupProps> = (props) => {
  const { options = [], selectedIndex, changeSelectedIndex } = props;

  return (
    <div style={{marginLeft: '20px', display: 'flex', flexDirection: 'column'}}>
      {options.map((item, index) => {
        const isSelected = selectedIndex === index;

        return(
          <RadioItem
            key={item}
            isSelected={isSelected}
            index={index}
            value={item}
            changeSelectedIndex={changeSelectedIndex}
          />
        );
      })
      }
    </div>
  );
}
class ModalPage extends Component<IModalPage> {
  state = {
    byRoleIndex: 0,
    byAccountTypeIndex: 0,
    selectedIndex: this.props.selectedIndex,
  }
  applyChanges = () => {
    const { selectedIndex } = this.state;

     this.props.applyChanges({ selectedIndex });
     this.props.onPress();
  }

  changeSelectedIndex = (selectedIndex) => {
    console.log(selectedIndex)
   this.setState({ selectedIndex });
  }
  componentDidMount() {
    console.log("mount")
  }
  componentWillUnmount() {
    console.log("unmount")
  }
  render() {
    return (
      <div>
        <div className="modal-custom">
            <input type="button" value="Применить" onClick={this.applyChanges}/>
          <RadioGroup
            options={['Все', 'ГКМ', 'ВКО', 'КМ']}
            selectedIndex={this.state.selectedIndex}
            changeSelectedIndex={this.changeSelectedIndex}
          />
        </div>
        <div className="modal-background" onClick={this.props.onPress}></div>
      </div>
    );
  }
}

export default ModalPage;