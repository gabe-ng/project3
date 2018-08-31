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
