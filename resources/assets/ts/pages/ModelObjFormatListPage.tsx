import React, {Component} from "react";
import "./modelObjFormatStyle.css";
import {fetchModelsFormatObj} from "../actions/modelFormatObjActions";

const Row = (props) => {
  const deleteModelFormatObjHandler = () => {
    props.onClick(props.modelId)
  }
  return (
    <div className="rowDiv">
      <div className="columnTitleDiv">{props.title}</div>
      <div className="columnDiv">
        <button
          className="btn btn-sm btn-primary btn-block"
          onClick={deleteModelFormatObjHandler}
        >
          Удалить
        </button>
      </div>
    </div>
  );
}

export class ModelObjFormatListPage extends Component {
  state = {
    projectName: "",
    objModelFile: null,
    fileUrl: "",
  }
  componentDidMount() {
    this.props.fetchModelsFormatObj();
  }
  changeProjectName = (e) => {
    this.setState({projectName: e.target.value})
  }
  selectFile = (e) => {
    e.preventDefault()
    const formData = new FormData();
    const file = e.target.files[0];
    this.setState({objModelFile: file})
  }
  createModelFormatObj = () => {
    this.props.createModelFormatObj(this.state.projectName, this.state.objModelFile)
  }
  render() {
    const {modelList, deleteModelFormatObj} = this.props;
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
              onChange={this.selectFile}
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
              modelId={model.id}
              title={model.title}
              onClick={deleteModelFormatObj}
            />
          ))
          }
        </div>
      </div>
    );
  }
}