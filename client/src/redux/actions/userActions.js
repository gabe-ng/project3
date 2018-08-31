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