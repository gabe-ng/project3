import { createStore } from "redux";
import thunk from 'redux-thunk';
import reducer from "./reducers";

const configureStore = () => {
  const store = createStore(
    reducer,
    thunk,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

export default configureStore;
