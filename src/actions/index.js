import {

  FETCH_HOUSES_REQUEST,
  FETCH_HOUSES_SUCCESS,
  FETCH_HOUSES_FAILURE,
  FETCH_HOUSE_REQUEST,
  FETCH_HOUSE_SUCCESS,
  FETCH_HOUSE_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  ADD_FAVORITE_SUCCESS,
  ADD_FAVORITE_FAILURE,
  FETCH_FAVORITE_REQUEST,
  FETCH_FAVORITE_SUCCESS,
  FETCH_FAVORITE_FAILURE,

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

const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});

const loginUserFailure = (error) => ({
  type: LOGIN_USER_FAILURE,
  payload: error,
});

const logoutUserSuccess = (user) => ({
  type: LOGOUT_USER_SUCCESS,
  payload: user,
});

const logoutUserFailure = (error) => ({
  type: LOGOUT_USER_FAILURE,
  payload: error,
});

const registerUserSuccess = (user) => ({
  type: REGISTER_USER_SUCCESS,
  payload: user,
});

const registerUserFailure = (error) => ({
  type: REGISTER_USER_FAILURE,
  payload: error,
});

const AddFavoriteSuccess = (favorites) => ({
  type: ADD_FAVORITE_SUCCESS,
  payload: favorites,
});

const AddFavoriteFailure = (error) => ({
  type: ADD_FAVORITE_FAILURE,
  payload: error,
});

const fetchFavoriteRequest = () => ({
  type: FETCH_FAVORITE_REQUEST,

});

const fetchFavoriteSuccess = (favorites) => ({
  type: FETCH_FAVORITE_SUCCESS,
  payload: favorites,
});

const fetchFavoriteFailure = (error) => ({
  type: FETCH_FAVORITE_FAILURE,
  payload: error,
});

export {
  fetchHousesRequest, fetchHousesSuccess, fetchHousesFailure, fetchHouseRequest,
  fetchHouseSuccess, fetchHouseFailure, registerUserFailure,
  registerUserSuccess, loginUserSuccess, loginUserFailure, logoutUserSuccess, logoutUserFailure,
  AddFavoriteFailure, AddFavoriteSuccess, fetchFavoriteRequest, fetchFavoriteSuccess,
  fetchFavoriteFailure,
};
