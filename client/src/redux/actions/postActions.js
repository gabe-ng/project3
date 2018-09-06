import axios from "axios";

export const getPostSuccess = () => {
    return {
        type: "GET_POST",
    }
}

export const getPost = (postId) => {
    return dispatch => {
        return axios.get("http://localhost:3001/api/posts/" + postId)
            .then(res => {
                dispatch(getPostSuccess());
                return res.data
            })
            .catch(err => console.log(err))
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

export const editPostSuccess = () => {
    return {
        type: "EDIT_POST_SUCCESS"
    }
}

export const editPost =(postId, update) => {
    return dispatch => {
        return axios.put("http://localhost:3001/api/posts/" + postId, update)
            .then(res => {
                dispatch(editPostSuccess())
            })
            .catch(err => console.log(err));
    }
}

export const deletePostSuccess = () => {
    return {
        type: "DELETE_POST_SUCCESS",
    }
}

export const deletePost = (postId) => {
    return dispatch => {
        return axios.delete("http://localhost:3001/api/posts/" + postId)
            .then(res => {
                return dispatch(deletePostSuccess())
            })
            .catch(err => console.log(err));
    }
}