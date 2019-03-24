import React, {Component} from "react";
import {IModel} from "../models";
import "./modelObjFormatStyle.css";
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from '@material-ui/core/Button';
import { withStyles, StyleRulesCallback, StyleRules, StyledComponentProps } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { styles } from './styles';

interface IProps extends StyledComponentProps<string> {
    fetchModelsFormatObj: () => void;
    createModelFormatObj: (projectName: string, file: string) => void;
    modelList: IModel[];
    deleteModelFormatObj:(modelId: string) => void;
}

interface IState {
    projectName: string,
    objModelFile: string | null,
    fileUrl: string,
    isCreateFormShown: boolean,
}

class ModelObjFormatListPage extends Component<IProps, IState> {
  state = {
    projectName: "",
    objModelFile: null,
    fileUrl: "",
    isCreateFormShown: false,
  }
  componentDidMount() {
    this.props.fetchModelsFormatObj();
  }
  changeCreateFormShown = () => {
    this.setState(prevState =>({isCreateFormShown: !prevState.isCreateFormShown}))
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
  renderCreateForm = () => {
    const {classes} = this.props;

      return (
          <div className="inputFileDiv">
            <ClearIcon style={{alignSelf: "flex-end"}} onClick={this.changeCreateFormShown}/>
            <TextField
              id="standard-name"
              label="Название проекта"
              className={classes.textField}
              value={this.state.projectName}
              onChange={this.changeProjectName}
              margin="normal"
            />
            <Button
              variant="contained"
              component="label"
            >
              Upload File
              <input
                type="file"
                style={{ display: "none" }}
                onChange={this.selectFile}
              />
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.createModelFormatObj}
            >
              Загрузить проект
            </Button>
          </div>
      );
  }

  render() {
    const {modelList, deleteModelFormatObj, classes} = this.props;
    const { isCreateFormShown } = this.state;
    if (!Array.isArray(modelList)) {
      return <div/>
    }

    return (
      <div  className={classes.root}>
        <GridList cellHeight={180} cols={3} className={classes.gridList}>
          <GridListTile key="Subheader"  cols={3} style={{ height: 'auto' }}>
            <ListSubheader component="div">Список загруженных файлов в формате .obj</ListSubheader>
          </GridListTile>
          <div className={classes.addIconDiv}>
            {!isCreateFormShown ?
              <Tooltip title="Add" aria-label="Add">
                <Fab color="primary" className={classes.fab}>
                  <AddIcon onClick={this.changeCreateFormShown}/>
                </Fab>
              </Tooltip>
              :
              this.renderCreateForm()
            }
          </div>
          {modelList.map(model => (
              <GridListTile key={model.id}>
                <img src="./default.png"/>
                  <GridListTileBar
                      title={model.title}
                      actionIcon={
                        <a href={`/vrViewer?modelId=${model.id}`} target="_blank" className={classes.button}>
                          Посмотреть проект
                        </a>
                      }
                  />
              </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles)(ModelObjFormatListPage);