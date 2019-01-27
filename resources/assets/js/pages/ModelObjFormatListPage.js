import React, {Component} from "react";
import "./modelObjFormatStyle.css";

const Row = (props) => (
  <div className="rowDiv">
    <div className="columnTitleDiv">{props.title}</div>
    <div className="columnDiv">
      <button
        className="btn btn-sm btn-primary btn-block"
      >
        Удалить
      </button>
    </div>
  </div>
)

export class ModelObjFormatListPage extends Component {
  state = {
    projectName: "",
  }
  changeProjectName = (e) => {
    this.setState({projectName: e.target.value})
  }
  createModelFormatObj = () => {
    this.props.createModelFormatObj(this.state.projectName)
  }
  render() {
    const {modelList} = this.props;
    if (!Array.isArray(modelList)) {
      return <div/>
    }
    return (
      <div>
        <div className="inputContainer">
          <div className="inputFileDiv">
            <input
              className="inputProjectTitle"
              type="text"
              placeholder="Project name"
              value={this.state.projectName}
              onChange={this.changeProjectName}
            />
            <input
              className="inputFile"
              type="file"
              placeholder="file"
            />
            <button
              className="btn btn-sm btn-primary btn-block inputButton"
              onClick={this.createModelFormatObj}
            >
              Загрузить
            </button>
          </div>
        </div>
        <div className="titleDiv">Список загруженных файлов в формате .obj</div>
        <div className="containerDiv">
          {modelList.map((model = {}) => (
            <Row
              key={model.id}
              title={model.title}
            />
          ))
          }
        </div>
      </div>
    );
  }
}