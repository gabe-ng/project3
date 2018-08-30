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

export const getPostsSuccess = (posts) => {
    return {
        type: "GET_POSTS",
        posts
    }
}

export const getPosts = () => {
    return dispatch => {
        return axios.get("http://localhost:3001/api/posts")
            .then(res => {
                return dispatch(getPostsSuccess(res.data))
            })
            .catch(err => console.log(err))
    }
}