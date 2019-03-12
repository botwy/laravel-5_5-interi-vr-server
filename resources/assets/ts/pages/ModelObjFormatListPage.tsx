import React, {Component} from "react";
import "./modelObjFormatStyle.css";
import Card from '@material-ui/core/Card';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    //width: 500,
   // height: 450,
    width: '100%',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  button: {
    margin: theme.spacing.unit,
    color: '#ffffff',
  },
});

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
      <a href={`/vrViewer?modelId=${props.modelId}`} target="_blank">
        Посмотреть проект
      </a>
    </div>
  );
}

class ModelObjFormatListPage extends Component {
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
    const {modelList, deleteModelFormatObj, classes} = this.props;
    if (!Array.isArray(modelList)) {
      return <div/>
    }
    return (
      <div  className={classes.root}>
        <GridList cellHeight={180} cols={3} className={classes.gridList}>
          <GridListTile key="Subheader"  cols={3} style={{ height: 'auto' }}>
            <ListSubheader component="div">Список загруженных файлов в формате .obj</ListSubheader>
          </GridListTile>
          {modelList.map(model => (
              <GridListTile key={model.id}>
                  <GridListTileBar
                      title={model.title}
                      actionIcon={
                        <a href={`/vrViewer?modelId=${model.modelId}`} target="_blank" className={classes.button}>
                          Посмотреть проект
                        </a>
                      }
                  />
              </GridListTile>
          ))}
        </GridList>
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
          {modelList.map((model = {}, index) => (
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

export default withStyles(styles)(ModelObjFormatListPage);