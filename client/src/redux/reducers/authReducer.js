let defaultAuthState = {
    currentUser: {},
    isAuthenticated: false,
};

const authReducer = (state = defaultAuthState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
