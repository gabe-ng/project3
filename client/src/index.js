import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import ConfigureStore from "./redux/configStore";
import App from "./App";

import "./styles/reset.css";


import registerServiceWorker from './registerServiceWorker';

const store = ConfigureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
