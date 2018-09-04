import { combineReducers } from "redux";

import userReducer from "./userReducer";
import postReducer from "./postReducer";
import authReducer from "./authReducer";
import friendsReducer from "./friendsReducer";
import commentReducer from "./commentReducer";

const rootReducer = combineReducers({
    userReducer,
    postReducer,
    authReducer,
    friendsReducer,
    commentReducer,
});

export default rootReducer;
