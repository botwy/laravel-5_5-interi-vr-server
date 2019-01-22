import React from 'react';
import {Admin, Resource} from 'admin-on-rest';
import authClient from './authClient';
import ReactDOM from "react-dom";

const App = () => (
  <Admin authClient={authClient}>
  </Admin>
);

export default App;

if (document.getElementById('root')) {
  ReactDOM.render(<App/>, document.getElementById('root'));
}