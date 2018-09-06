import { combineReducers } from "redux";

import userReducer from "./userReducer";
import postReducer from "./postReducer";
import authReducer from "./authReducer";
import friendsReducer from "./friendsReducer";
import commentReducer from "./commentReducer";
import profileImageReducer from "./profileImageReducer";

const rootReducer = combineReducers({
    userReducer,
    postReducer,
    authReducer,
    friendsReducer,
    commentReducer,
    profileImageReducer,
});

export default rootReducer;
