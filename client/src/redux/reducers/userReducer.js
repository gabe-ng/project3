let defaultUserState = {};

const userReducer = (state = defaultUserState, action) => {
    switch(action.type) {
        case "SHOW_ALL":
            let showAllState = {...state };
            showAllState.users = action.users;
            return showAllState;
        case "GETTING_PROFILE":
            console.log("attempting to get profile data");
            return { ...state };
        case "SHOW_PROFILE":
            let newProfileState = { ...state };
            newProfileState.profileInfo = action.userInfo;
            return newProfileState;
        case "UPDATING_USER":
            console.log("attempting to update user");
            return { ...state }
        case "UPDATE_USER_ERROR":
            console.log("update user error");
            return {...state };
        case "UPDATE_USER_SUCCESS":
            console.log("updated user successful");
            let updatedProfileState = { ...state };   
            updatedProfileState.profileInfo = action.userInfo
            console.log(updatedProfileState);
            
            return updatedProfileState;
        default:
            return state;
    }
};

export default userReducer;