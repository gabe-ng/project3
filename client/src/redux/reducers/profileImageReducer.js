let defaultImageState = {};

const imageReducer = (state = defaultImageState, action) => {
    switch(action.type) {
        case "GETTING_PROFILE_IMAGE":
            return { ...state };
        case "GETTING_PROFILE_IMAGE_ERROR":
            return { ...state };
        case "GETTING_PROFILE_IMAGE_SUCCESS":
            let newImageState = { ...state };
            newImageState.image = action.image;
            return newImageState;
        case "UPLOADING_PROFILE_IMAGE":
            return { ...state };
        case "UPLOADING_PROFILE_IMAGE_ERROR":
            return { ...state };
        case "UPLOADING_PROFILE_IMAGE_SUCCESS":
            let uploadImageState = { ...state };
            uploadImageState.image = action.image;
            return uploadImageState;
        default:
            return { ...state };
    }
}

export default imageReducer;