import axios from 'axios';
import {

  FETCH_HOUSES_REQUEST,
  FETCH_HOUSES_SUCCESS,
  FETCH_HOUSES_FAILURE,
  LOGIN,
  LOGOUT,
} from './actionTypes';

const fetchHousesRequest = () => ({
  type: FETCH_HOUSES_REQUEST,
});

const fetchHousesSuccess = (houses) => ({
  type: FETCH_HOUSES_SUCCESS,
  payload: houses,
});

const fetchHousesFailure = (error) => ({
  type: FETCH_HOUSES_FAILURE,
  payload: error,
});

const fetchHouses = () => async (dispatch) => {
  dispatch(fetchHousesRequest);

  try {
    const response = await axios.get(
      'https://houses-api1.herokuapp.com/houses/',
    );
    const houses = response.data;
    dispatch(fetchHousesSuccess(houses));
  } catch (error) {
    const errorMessage = error.message;
    dispatch(fetchHousesFailure(errorMessage));
  }
};

const login = (isLogged) => ({
  type: LOGIN,
  payload: isLogged,
});

const logoutUser = (user) => ({
  type: LOGOUT,
  payload: user,
});

export {
  fetchHousesRequest, fetchHousesSuccess, fetchHousesFailure, fetchHouses, login, logoutUser,
};
