import axios from "axios";
import jwt_decode from "jwt-decode";

export const initialLoad = () => {
  return {
    type: "INITIAL_LOAD"
  };
};

export const logInSuccess = userData => {
  return {
    type: "LOG_IN",
    userData
  };
};

export const logInError = () => {
  return {
    type: "LOG_IN_ERROR"
  };
};

export const logIn = userData => {
  return dispatch => {
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
