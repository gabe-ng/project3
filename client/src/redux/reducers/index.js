import { combineReducers } from "redux";

import userReducer from "./userReducer";
import postReducer from "./postReducer";
import authReducer from "./authReducer";
import friendsReducer from "./friendsReducer";
import commentReducer from "./commentReducer";
import chatReducer from "./chatReducer";

const rootReducer = combineReducers({
    userReducer,
    postReducer,
    authReducer,
    friendsReducer,
    commentReducer,
    chatReducer,
});

export default rootReducer;
