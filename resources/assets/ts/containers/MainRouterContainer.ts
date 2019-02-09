import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import { MainRouterPage } from "../pages/MainRouterPage";
import {authExecute} from "../actions/mainRouterActions";
import {ThunkAction} from "redux-thunk";

interface IMappedState {
    authStatus: boolean;
}
interface IReduxState {
    mainRouter: {authStatus: boolean};
}
interface IDispatchProps {
    authExecute: () => ThunkAction<any,any,any,any>;
}
const mapStateToProps: MapStateToProps<IMappedState, void, IReduxState> = (state) => ({
  authStatus: state.mainRouter.authStatus,
})
const mapDispatchToProps: MapDispatchToProps<IDispatchProps, void> = {
  authExecute,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainRouterPage)