import axios from "axios";
import jwt_decode from "jwt-decode";

export const initialLoad = () => {
  return {
    type: "INITIAL_LOAD"
  };
};

export const loggingIn = () => {
    return {
        type: "LOGGING_IN",
    }
}

export const logInError = () => {
  return {
    type: "LOG_IN_ERROR"
  };
};

export const logInSuccess = userData => {
    return {
        type: "LOG_IN_SUCCESS",
        userData
    };
};

export const logIn = userData => {
  return dispatch => {

    dispatch(loggingIn());

    return axios.post("http://localhost:3001/api/login", userData)
        .then(res => {
          console.log("login action res", res);
          localStorage.setItem("fbct", res.data.token);
          const decoded = jwt_decode(res.data.token);
          dispatch(logInSuccess(decoded));
        })
        .catch(() => dispatch(logInError()));
  };
};
