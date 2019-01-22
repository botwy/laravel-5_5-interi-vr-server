import { connect } from "react-redux";
import { LoginPage } from "../pages/LoginPage";
import * as loginActions from "../actions/loginActions";

const mapStateToProps = (state) => ({
  isLogin: state.user.isLogin,
})
const mapDispatchToProps = loginActions;

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)