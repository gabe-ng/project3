let defaultPostState = {
    posts: [],
};

const postReducer = (state = defaultPostState, action) => {
    switch (action.type) {
        case "CREATING_POST":
            console.log("attempting to create post");
            return { ...state };
        case "CREATE_POST_ERROR":
            console.log("failed to create post");
            return { ...state };
        case "CREATE_POST_SUCCESS":
            console.log("create post successful");
            return { ...state };
        case "GET_POSTS":
            let newPostState = { ...state };
            newPostState.posts = action.posts;
            return newPostState;
        default:
            return state;
    }
};

export default postReducer;