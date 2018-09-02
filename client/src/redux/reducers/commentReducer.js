let defaultCommentState = {
    comments: [],
}

const commentReducer = (state = defaultCommentState, action) => {
    switch (action.type) {
      case "GETTING_COMMENTS":
        return { ...state };
      case "GET_COMMENTS_ERROR":
        return { ...state };
      case "GET_COMMENTS_SUCCESS":
        console.log(action.comments);
        let commentsState = { ...state };
        console.log(commentsState.comments);
        for (let comment of action.comments) {
          commentsState.comments.push(comment);
        }
        console.log(commentsState);

        // commentsState.comments.push(action.comments);
        return commentsState;
      case "CREATING_COMMENT":
        return { ...state }
      case "CREATE_COMMMENT_ERROR":
        return { ...state };
      case "CREATE_COMMENT_SUCCESS":
            console.log(action);

            let newCommentState = { ...state };
        // for (let comment of action.comments) {
        //   newCommentState.comments.push(comment);
        // }
            return newCommentState;
        return {};
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
