import axios from 'axios';
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from './actionTypes';

const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});

const loginUserFailure = (error) => ({
  type: LOGIN_USER_FAILURE,
  payload: error,
});

const loginUserAction = (user) => async (dispatch) => {
  axios
    .post(
      'https://houses-api1.herokuapp.com/sessions',
      {
        user,
      },
      { withCredentials: true },
    )
    .then((response) => {
      const userdetails = response.data;
      dispatch(loginUserSuccess(userdetails));
    })
    .catch((error) => {
      const errMsg = error.message;
      dispatch(loginUserFailure(errMsg));
    });
};

export default loginUserAction;
