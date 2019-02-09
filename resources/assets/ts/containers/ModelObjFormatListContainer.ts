import {connect} from "react-redux";
import {ModelObjFormatListPage} from "../pages/ModelObjFormatListPage";
import {createModelFormatObj, deleteModelFormatObj, fetchModelsFormatObj} from "../actions/modelFormatObjActions";

const mapStateToProps = (state) => ({
  modelList: state.modelFormatObj.modelList,
})
const mapDispatchToProps = {
  createModelFormatObj,
  deleteModelFormatObj,
  fetchModelsFormatObj,
}

export default connect(mapStateToProps, mapDispatchToProps)(ModelObjFormatListPage)