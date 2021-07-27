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

const registerUserFailure = (error) => ({
  type: REGISTER_USER_FAILURE,
  payload: error,
});

const registerUserAction = (user) => async (dispatch) => {
  axios
    .post(
      'https://houses-api1.herokuapp.com/registrations',
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
