import {connect} from "react-redux";
import ModelObjFormatListPage from "../pages/ModelObjFormatListPage";
import {createModelFormatObj, deleteModelFormatObj, fetchModelsFormatObj} from "../actions/modelFormatObjActions";
import {modelObjFromatListSelector} from '../selectors/modelObjFromatListSelector';

const mapStateToProps = (state) => ({
  modelList: modelObjFromatListSelector(state),
})
const mapDispatchToProps = {
  createModelFormatObj,
  deleteModelFormatObj,
  fetchModelsFormatObj,
}

export default connect(mapStateToProps, mapDispatchToProps)(ModelObjFormatListPage)