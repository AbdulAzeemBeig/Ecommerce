import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/authConstants";

export const loginSuccess = (userData) => (dispatch) => {
  dispatch({
    type: USER_LOGIN_SUCCESS,
    payload: userData,
  });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");

  dispatch({
    type: USER_LOGOUT,
  });
};
