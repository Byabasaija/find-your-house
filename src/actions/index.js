import axios from 'axios';
import {

  FETCH_HOUSES_REQUEST,
  FETCH_HOUSES_SUCCESS,
  FETCH_HOUSES_FAILURE,
  FETCH_HOUSE_REQUEST,
  FETCH_HOUSE_SUCCESS,
  FETCH_HOUSE_FAILURE,
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
      'http://localhost:3001/houses',
    );
    const houses = response.data;
    dispatch(fetchHousesSuccess(houses));
  } catch (error) {
    const errorMessage = error.message;
    dispatch(fetchHousesFailure(errorMessage));
  }
};

const fetchHouseRequest = () => ({
  type: FETCH_HOUSE_REQUEST,
});

const fetchHouseSuccess = (house) => ({
  type: FETCH_HOUSE_SUCCESS,
  payload: house,
});

const fetchHouseFailure = (error) => ({
  type: FETCH_HOUSE_FAILURE,
  payload: error,
});

const fetchHouse = (id) => async (dispatch) => {
  dispatch(fetchHouseRequest);

  try {
    const response = await axios.get(
      `http://localhost:3001/houses/${id}`,
    );
    const house = response.data;
    dispatch(fetchHouseSuccess(house));
  } catch (error) {
    const errorMessage = error.message;
    dispatch(fetchHouseFailure(errorMessage));
  }
};

export {
  fetchHousesRequest, fetchHousesSuccess, fetchHousesFailure, fetchHouses, fetchHouse,
};
