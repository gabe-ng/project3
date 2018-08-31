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

export const getComments = (postId) => {
    return dispatch => {        
        dispatch(gettingComments());

        return axios.get("http://localhost:3001/api/comments/" + postId)
            .then(res => {
                return dispatch(getCommentsSuccess(res.data));
            })
            .catch(err => console.log(err))
    }
};

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

export const deleteCommentSuccess = () => {
    return {
        type: "DELETE_COMMENT_SUCCESS"
    }
}

export const deleteComment = (commentId) => {
    return dispatch => {

        dispatch(deletingComment());

        return axios.delete("http://localhost:3001/api/comments/" + commentId)
            .then(res => {
                return dispatch(deleteCommentSuccess());
            })
            .catch(err => console.log(err))
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
