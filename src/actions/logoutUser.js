import axios from 'axios';
import {
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
} from './actionTypes';

const logoutUserSuccess = (user) => ({
  type: LOGOUT_USER_SUCCESS,
  payload: user,
});

const logoutUserFailure = (error) => ({
  type: LOGOUT_USER_FAILURE,
  payload: error,
});

const logoutUserAction = (id) => async (dispatch) => {
  axios
    .delete(
      `https://houses-api1.herokuapp.com/sessions/${id}`,
      { withCredentials: true },
    )
    .then((response) => {
      const logout = response.data;
      dispatch(logoutUserSuccess(logout));
    })
    .catch((error) => {
      const errMsg = error.message;
      dispatch(logoutUserFailure(errMsg));
    });
};

export default logoutUserAction;
