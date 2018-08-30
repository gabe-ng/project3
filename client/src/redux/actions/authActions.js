import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";

export const signingUp = () => {
  return {
    type: "SIGNING_UP",
  }
} 

export const signUpError = () => {
  return {
    type: "SIGN_UP_ERROR",
  }
} 

export const signUpSuccess = userData => {
  return {
    type: "SIGN_UP_SUCCESS",
    userData
  }
} 

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

export const loggingOut = () => {
    return {
        type: "LOGGING_OUT",
    }
}

export const logOutSuccess = () => {
    return {
        type: "LOG_OUT_SUCCESS",
    };
};

export const userStillLoggedIn = (userData) => {
  return {
    type: "STILL_LOGGED_IN",
    userData,
  }
}

export const signUp = userData => {
  return dispatch => {

    dispatch(signingUp());

    return axios.post("http://localhost:3001/api/users/create", userData)
      .then(res => {
        console.log("sign action res", res);
        localStorage.setItem("fbct", res.data.token);
        const decoded = jwt_decode(res.data.token);
        dispatch(signUpSuccess(decoded));
      })
      .catch(() => dispatch(signUpError()));
  }
}

export const logIn = userData => {
  return dispatch => {

    dispatch(loggingIn());

    return axios.post("http://localhost:3001/api/users/login", userData)
        .then(res => {
          console.log("login action res", res);
          localStorage.setItem("fbct", res.data.token);
          const decoded = jwt_decode(res.data.token);
          dispatch(logInSuccess(decoded));
        })
        .catch(() => dispatch(logInError()));
  };
};

export const logOut = () => {
  return dispatch => {

    dispatch(loggingOut());

    return dispatch(logOutSuccess());
  }
}

export const stillLoggedIn = () => {
  return dispatch => {
    let token = jwt_decode(localStorage.getItem("fbct"));
    setAuthToken(localStorage.getItem("fbct"));

    dispatch(userStillLoggedIn(token))
  }
}