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
        default:
            return { ...state };
    }
}

export default imageReducer;