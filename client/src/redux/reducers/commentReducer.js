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
            let commentsState = { ...state};
            commentsState.comments = action.comments;
            return commentsState;
        case "CREATING_COMMENT":
            let newCommentState = { ...state};
            newCommentState.comments.push(action.comment) 
            return newCommentState;
        case "CREATE_COMMMENT_ERROR":
            return { ...state };
        case "CREATE_COMMENT_SUCCESS":
            return {}
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
