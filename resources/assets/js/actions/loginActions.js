import { USER_LOGIN_ERROR, USER_LOGIN_REQUEST_SEND, USER_LOGIN_SUCCESS, } from "../constants/actionTypes";
const userLoginRequestSend = () => ({
    type: USER_LOGIN_REQUEST_SEND,
});
const userLoginSucces = (user = {}) => ({
    type: USER_LOGIN_SUCCESS,
    authStatus: user.authStatus,
});
const userLoginError = (errorMsg) => ({
    type: USER_LOGIN_ERROR,
    error: errorMsg,
});
export const loginExecute = (email, password) => (dispatch, getState, { api }) => {
    const urlText = "http://localhost:8000/login?email=" + email + "&password=" + password;
    console.log(urlText);
    const options = { url: urlText };
    dispatch(userLoginRequestSend());
    dispatch(api.get(options))
        .then((data) => dispatch(userLoginSucces(data)), (error) => {
        dispatch(userLoginError(error.message));
    });
};
//# sourceMappingURL=loginActions.js.map