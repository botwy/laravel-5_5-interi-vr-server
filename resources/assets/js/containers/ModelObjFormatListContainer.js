import { connect } from "react-redux";
import { ModelObjFormatListPage } from "../pages/ModelObjFormatListPage";
import * as modelFormatObjActions from "../actions/modelFormatObjActions";

const mapStateToProps = (state) => ({
  modelList: state.modelFormatObj.modelList,
})
const mapDispatchToProps = modelFormatObjActions

export default connect(mapStateToProps, mapDispatchToProps)(ModelObjFormatListPage)