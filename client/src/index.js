import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import ConfigureStore from "./redux/configStore";
import './styles/index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

const store = ConfigureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
