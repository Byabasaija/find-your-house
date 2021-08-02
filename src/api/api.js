/* eslint-disable no-param-reassign */
import axios from 'axios';
import {
  fetchHousesRequest, fetchHousesSuccess, fetchHousesFailure, fetchHouseRequest,
  fetchHouseSuccess, fetchHouseFailure, registerUserFailure,
  registerUserSuccess, loginUserSuccess, loginUserFailure, logoutUserSuccess,
} from '../actions/index';
import setAuthToken from '../utils/authToken';

const apiUrl = 'http://localhost:3001';

const registerUserAction = (user) => async (dispatch) => {
  axios
    .post(
      `${apiUrl}/signup`,
      {
        user,
      },
    )
    .then((response) => {
      const token = response.data.auth_token;
      localStorage.setItem('token', token);
      setAuthToken(token);
      const userdata = response.data.user;
      dispatch(registerUserSuccess(userdata));
    })
    .catch((error) => {
      const errMsg = error.message;
      dispatch(registerUserFailure(errMsg));
    });
};

const loginUserAction = (user) => async (dispatch) => {
  axios
    .post(
      `${apiUrl}/auth/login`,
      {
        user,
      },
    )
    .then((response) => {
      const token = response.data.auth_token;
      localStorage.setItem('token', token);
      setAuthToken(token);
      const userdetails = response.data.user;
      dispatch(loginUserSuccess(userdetails));
    })
    .catch((error) => {
      const errMsg = error.message;
      dispatch(loginUserFailure(errMsg));
    });
};

const logoutUserAction = () => (dispatch) => {
  localStorage.removeItem('token');
  setAuthToken(false);
  dispatch(logoutUserSuccess({ message: 'You logged out successfully' }));
};
const fetchHouses = () => async (dispatch) => {
  dispatch(fetchHousesRequest);

  try {
    const response = await axios.get(
      `${apiUrl}/houses`,
    );
    const houses = response.data;
    dispatch(fetchHousesSuccess(houses));
  } catch (error) {
    const errorMessage = error.message;
    dispatch(fetchHousesFailure(errorMessage));
  }
};

const fetchHouse = (id) => async (dispatch) => {
  dispatch(fetchHouseRequest());

  try {
    const response = await axios.get(
      `${apiUrl}/houses/${id}`,
    );
    const house = response.data;
    dispatch(fetchHouseSuccess(house));
  } catch (error) {
    const errorMessage = error.message;
    dispatch(fetchHouseFailure(errorMessage));
  }
};

export {
  registerUserAction, loginUserAction, logoutUserAction, fetchHouses, fetchHouse,
};
