import axios from 'axios';
import {
//   REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from './actionTypes';

// const registerUserRequest = () => ({
//   type: REGISTER_USER_REQUEST,
// });

const registerUserSuccess = (user) => ({
  type: REGISTER_USER_SUCCESS,
  payload: user,
});

const registerUserFailure = (status) => ({
  type: REGISTER_USER_FAILURE,
  payload: status,
});

const registerUserAction = (user) => async (dispatch) => {
  axios
    .post(
      'http://localhost:3001/registrations',
      {
        user,
      },
      { withCredentials: true },
    )
    .then((response) => {
      const userdata = response.data;
      dispatch(registerUserSuccess(userdata));
    })
    .catch((error) => {
      const errMsg = error.message;
      dispatch(registerUserFailure(errMsg));
    });
};

export default registerUserAction;
