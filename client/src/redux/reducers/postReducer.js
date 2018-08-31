let defaultPostState = {
    posts: [],
};

const postReducer = (state = defaultPostState, action) => {
    switch (action.type) {
      case "GET_POSTS":
        let newPostState = { ...state };
        newPostState.posts = action.posts;
        return newPostState;
      case "CREATING_POST":
        console.log("attempting to create post");
        return { ...state };
      case "CREATE_POST_ERROR":
        console.log("failed to create post");
        return { ...state };
      case "CREATE_POST_SUCCESS":
        console.log("create post successful");
        return { ...state };
      case "DELETE_POST_SUCCESS":
        console.log("delete post successful");
        let newDeletedState = { ...state };
        newDeletedState.message = "Deleted Post!"
        return newDeletedState;
      default:
        return state;
    }
};

export default postReducer;