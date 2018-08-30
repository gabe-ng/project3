let defaultAuthState = {
    currentUser: {},
    isAuthenticated: false,
};

// const loggingIn = (state) => {
//     console.log("attempting to log in");
//     return {...state };
// }

// const logInError = (state) => {
//     console.log("failed to log in");
//     return {...state};
// }

// const logInSuccess = (state, userData) => {
//     console.log("logged in successful");
//     let newState = { ...state};
//     newState.isAuthenticated = true;
//     newState.currentUser = userData;
//     return newState;
// }

const authReducer = (state = defaultAuthState, action) => {
  switch (action.type) {
    case 'SIGNING_UP':
        console.log(("attempting to sign up"));
        return { ...state };
    case 'SIGN_UP_ERROR':
        console.log("failed to sign up");
        return { ...state };
    case 'SIGN_UP_SUCCESS':
        console.log("sign up successfull");
        let newSignupState = { ...state };
        newSignupState.isAuthenticated = true;
        newSignupState.currentUser = action.userData;
        return newSignupState;
    case 'LOGGING_IN':
        // loggingIn(state);
        console.log("attempting to log in");
        return {...state };
    case 'LOG_IN_ERROR':
        // logInError(state);
        console.log("failed to log in");
        return {...state};
    case 'LOG_IN_SUCCESS':
        // logInSuccess(state, action.userData);
        console.log("logged in successful");
        let newLoginState = { ...state};
        newLoginState.isAuthenticated = true;
        newLoginState.currentUser = action.userData;
        return newLoginState;
    case 'LOGGING_OUT':
        console.log("attempting to log out");
        return {...state };
    case 'LOG_OUT_SUCCESS':
        console.log("logout successfull");
        localStorage.removeItem("fbct");
        let newLogoutState = { ...state };
        newLogoutState.isAuthenticated = false;
        newLogoutState.currentUser = {};
        return newLogoutState;
    case 'STILL_LOGGED_IN':
        console.log("user still logged in");
        let refreshedState = { ...state };
        refreshedState.isAuthenticated = true;
        refreshedState.currentUser = action.userData;
        return refreshedState;
    default:
      return state;
  }
};

export default authReducer;
