import { connect } from "react-redux";
import { MainRouterPage } from "../pages/MainRouterPage";
import * as mainRouterActions from "../actions/mainRouterActions";

const mapStateToProps = (state) => ({
  authStatus: state.mainRouter.authStatus,
})
const mapDispatchToProps = mainRouterActions

export default connect(mapStateToProps, mapDispatchToProps)(MainRouterPage)