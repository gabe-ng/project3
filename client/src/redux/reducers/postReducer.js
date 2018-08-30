let defaultPostState = {};

const postReducer = (state = defaultPostState, action) => {
    switch (action.type) {
        case "CREATING_POST":
            console.log("attempting to create post");
            return { ...state };
        case "CREATE_POST_ERROR":
            console.log("failed to create post");
            return { ...state }
        case "CREATE_POST_SUCCESS":
            console.log("create post successful");
            return { ...state }
        default:
            return state;
    }
};

export default postReducer;