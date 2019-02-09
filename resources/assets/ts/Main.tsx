import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {reducer} from "./reducers/mainReducer";
import * as api from './common/api';
import MainRouter from "./containers/MainRouterContainer";

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument({api})))
)

/* An example React component */
export default class Main extends Component {

  render() {
    return (
      <Provider store={store}>
        <MainRouter/>
      </Provider>
    );
  }
}


/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/
if (document.getElementById('root')) {
  ReactDOM.render(<Main/>, document.getElementById('root'));
}