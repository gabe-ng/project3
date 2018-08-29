import { combineReducers } from "redux";

import userReducer from "./userReducer";
import postReducer from "./postReducer";
import authReducer from "./authReducer";
import friendsReducer from "./friendsReducer";

const rootReducer = combineReducers({
    userReducer,
    postReducer,
    authReducer,
    friendsReducer,
});

export default rootReducer;
