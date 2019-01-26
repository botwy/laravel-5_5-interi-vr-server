import { connect } from "react-redux";
import { LoginPage } from "../pages/LoginPage";
import * as loginActions from "../actions/loginActions";

const mapDispatchToProps = loginActions;

export default connect(undefined, mapDispatchToProps)(LoginPage)