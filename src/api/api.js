import axios from 'axios';
import {
  fetchHousesRequest, fetchHousesSuccess, fetchHousesFailure, fetchHouseRequest,
  fetchHouseSuccess, fetchHouseFailure, registerUserFailure,
  registerUserSuccess, loginUserSuccess, loginUserFailure, logoutUserSuccess, logoutUserFailure,
} from '../actions/index';

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

const fetchHouses = () => async (dispatch) => {
  dispatch(fetchHousesRequest);

  try {
    const response = await axios.get(
      'https://houses-api1.herokuapp.com/houses',
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
      `https://houses-api1.herokuapp.com/houses/${id}`,
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
