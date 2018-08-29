let defaultAuthState = {
    currentUser: {},
    isAuthenticated: false,
};

const authReducer = (state = defaultAuthState, action) => {
  switch (action.type) {
    // case 'INITIAL_LOAD':
    //     console.log("in reducer");
    //     let newState = {...state};
    //     newState.isAuthenticated = true;
    //     newState.newKey = "new val";
    //     console.log(newState);
    //     return newState;
    case 'LOG_IN':
        console.log("in log in");
        let newState = { ...state};
        newState.isAuthenticated = true;
        newState.currentUser = action.userData;
        return newState;
    default:
      return state;
  }
};

export default authReducer;
