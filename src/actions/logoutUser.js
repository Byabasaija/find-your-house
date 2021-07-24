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

const logoutUserAction = () => async (dispatch) => {
  axios
    .delete(
      'http://localhost:3001/logout',
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
