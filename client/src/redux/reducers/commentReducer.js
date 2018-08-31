let defaultCommentState = {
    comments: [],
}

const commentReducer = (state = defaultCommentState, action) => {
    switch(action.type) {
        case "GETTING_COMMENTS":
            return {...state};
        case "GET_COMMENTS_ERROR":
            return {...state};
        case "GET_COMMENTS_SUCCESS":
            let newCommentState = { ...state};
            newCommentState.comments = action.comments;
            return newCommentState;
        default:
            return state;
    }
}

export default commentReducer;
