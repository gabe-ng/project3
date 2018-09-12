import axios from "axios";

export const gettingComments = () => {
    return {
        type: "GETTING_COMMENTS"
    }
}

export const getCommentsError = () => {
    return {
        type: "GET_COMMENTS_ERROR"
    }
}

export const getCommentsSuccess = (comments) => {
    return {
        type: "GET_COMMENTS_SUCCESS",
        comments,
    }
}

export const getComments = () => {
    return dispatch => {        
        dispatch(gettingComments());

        return axios.get("http://localhost:3001/api/comments/")
            .then(res => {
                return dispatch(getCommentsSuccess(res.data));
            })
            .catch(err => console.log(err))
    }
};

export const creatingComment = () => {
    return {
        type: "CREATING_COMMENT"
    }
}

export const createCommentError = () => {
    return {
        type: "CREATE_COMMENT_ERROR"
    }
}

export const createCommentSuccess = (comment) => {
    return {
        type: "CREATE_COMMENT_SUCCESS",
        comment,
    }
}

export const createComment = (comment, userId, postId) => {
    return dispatch => {
 
        dispatch(creatingComment());

        return axios.post(`http://localhost:3001/api/comments/create/${userId}/${postId}`, comment)
            .then(res => {
                dispatch(createCommentSuccess(res.data))
            })
            .catch(dispatch(createCommentError()));
    }

}

export const deletingComment = () => {
    return {
        type: "DELETING_COMMENT"
    }
}

export const deleteCommentError = () => {
    return {
        type: "DELETE_COMMENT_ERROR"
    }
}

export const deleteCommentSuccess = (deletedComment) => {
    return {
        type: "DELETE_COMMENT_SUCCESS",
        deletedComment
    }
}

export const deleteComment = (commentId) => {
    return dispatch => {

        dispatch(deletingComment());

        return axios.delete("http://localhost:3001/api/comments/" + commentId)
            .then(res => {
                return dispatch(deleteCommentSuccess(res.data));
            })
            .catch(dispatch(deleteCommentError()));
    }
}

export const deletingPostCommentsSuccess = () => {
    return {
        type: "DELETE_POST_COMMENTS_SUCCESS"
    }
}

export const deletePostComments = (postId) => {
    return dispatch => {
        return axios.delete("http://localhost:3001/api/comments/post/" + postId)
            .then(res => {
                dispatch(deletingPostCommentsSuccess());
            })
            .catch(err => console.log(err));     
    }
}
