import axios from "axios";

export const gettingProfileImage = () => {
    return {
        type: "GETTING_PROFILE_IMAGE"
    }
}

export const profileImageError = () => {
    return {
        type: "GETTING_PROFILE_IMAGE_ERROR"
    }
}

export const profileImageSuccess = (image) => {
    return {
        type: "GETTING_PROFILE_IMAGE_SUCCESS",
        image
    }
}

export const getProfileImage = (userId) => {
    return dispatch => {

        dispatch(gettingProfileImage());

        return axios.get("http://localhost:3001/api/profileimages/" + userId)
            .then(res => {
                console.log(res);
                return dispatch(profileImageSuccess(res.data))
            })
            .catch(() => dispatch(profileImageError))
    }
}