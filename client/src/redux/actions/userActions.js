import axios from "axios";

export const showAllUsers = (users) => {
    return {
        type: "SHOW_ALL",
        users
    }
}

export const getAllUsers = () => {
    return dispatch => {
        axios.get("http://localhost:3001/api/users")
            .then(res => {
                dispatch(showAllUsers(res.data));
            })
    }
}

export const gettingUserProfile = () => {
    return {
        type: "GETTING_PROFILE",
    }
}

export const showUserProfile = (userInfo) => {
    return {
        type: "SHOW_PROFILE",
        userInfo,
    }
}

export const getUserProfile = (userId) => {
    return dispatch => {
        console.log("in getUserProfile");
        
        dispatch(gettingUserProfile());
        return axios.get("http://localhost:3001/api/users/"+userId)
            .then(res => {
                dispatch(showUserProfile(res.data))
            })
    }
}

export const updatingUser = () => {
    return {
        type: "UPDATING_USER"
    }
}

export const updateUserError = () => {
    return {
        type: "UPDATE_USER_ERROR"
    }
}

export const updateUserSuccess = () => {
    return {
        type: "UPDATE_USER_SUCCESS"
    }
}

export const updateUser = (userId) => {
    return dispatch => {

        dispatch(updatingUser());

        return axios.put("http://localhost:3001/api/users/" + userId, update)
            .then(res => {
                dispatch(updateUserSuccess())
            })
            .catch(err => {
                dispatch(updateUserError);
                console.log(err);        
            })
    }
}