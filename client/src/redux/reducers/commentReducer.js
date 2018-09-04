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
        let commentsState = { ...state };
        console.log("BEFOREQDWJDQJDWQJ", commentsState);
        console.log(action.comments);
        
         let filtered = action.comments.map(comment => {
            console.log(comment);
            if (comment)
                return comment;
            });
          commentsState.comments = filtered;
          console.log("AFTQWEWQDWQDQWDWQD", commentsState);
          
        return commentsState;
      case "CREATING_COMMENT":
        return { ...state }
      case "CREATE_COMMMENT_ERROR":
        return { ...state };
      case "CREATE_COMMENT_SUCCESS":
        let newCommentState = { ...state };
        console.log("DUQWDQJDQWDJJD", action.comment);
        
        newCommentState.comments.push(action.comment);
        return newCommentState;
      case "DELETING_COMMENT":
        return { ...state };
      case "DELETE_COMMENT_ERROR":
        return { ...state };
      case "DELETE_COMMENT_SUCCESS":
        return { ...state };
      case "DELETE_POST_COMMENTS_SUCCESS":
        return { ...state };
      default:
        return state;
    }
}

export default commentReducer;
