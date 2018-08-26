import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import ConfigureStore from "./redux/configStore";
import './styles/index.css';
import App from './App';

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
