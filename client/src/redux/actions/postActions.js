import axios from "axios";

export const creatingPost = () => {
    return {
        type: "CREATING_POST"
    }
}

export const createPostError = () => {
    return {
        type: "CREATE_POST_ERROR"
    }
}

export const createPostSuccess = () => {
    return {
        type: "CREATE_POST_SUCCESS"
    }
}

export const createPost = (post, userId) => {
    return dispatch => {

        dispatch(creatingPost());

        return axios.post("http://localhost:3001/api/posts/new/" + userId, post)
            .then(res => {
                return dispatch(createPostSuccess())
            })
            .catch(err => dispatch(createPostError()))
    }
}