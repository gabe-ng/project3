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
        case "DELETING_COMMENT":
            return { ...state };
        case "DELETE_COMMENT_ERROR":
            return { ...state };
        case "DELETE_COMMENT_SUCESS":
            return { ...state };
        case "DELETE_POST_COMMENTS_SUCCESS":
            return { ...state };
        default:
            return state;
    }
}

export default commentReducer;
