import { connect } from "react-redux";
import { MainRouterPage } from "../pages/MainRouterPage";

const mapStateToProps = (state) => ({
  isLogin: state.user.isLogin,
})

export default connect(mapStateToProps)(MainRouterPage)