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
        default:
            return state;
    }
};

export default userReducer;