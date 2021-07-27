/* eslint-disable camelcase */
import axios from 'axios';
import {
  ADD_FAVORITE_SUCCESS,
  ADD_FAVORITE_FAILURE,
  FETCH_FAVORITE_REQUEST,
  FETCH_FAVORITE_SUCCESS,
  FETCH_FAVORITE_FAILURE,
} from './actionTypes';

const AddFavoriteSuccess = (favorites) => ({
  type: ADD_FAVORITE_SUCCESS,
  payload: favorites,
});

const AddFavoriteFailure = (error) => ({
  type: ADD_FAVORITE_FAILURE,
  payload: error,
});

const AddFavoriteAction = (user_id, house_id) => async (dispatch) => {
  axios
    .post(
      'https://houses-api1.herokuapp.com/favorites',
      {
        user_id,
        house_id,
      },
      { withCredentials: true },
    )
    .then((response) => {
      const favorites = response.data;
      dispatch(AddFavoriteSuccess(favorites));
    })
    .catch((error) => {
      const errMsg = error.message;
      dispatch(AddFavoriteFailure(errMsg));
    });
};

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

const fetchFavoriteAction = (id) => async (dispatch) => {
  dispatch(fetchFavoriteRequest());
  axios
    .get(
      `https://houses-api1.herokuapp.com/sessions/${id}`,
      { withCredentials: true },
    )
    .then((response) => {
      const favorites = response.data;
      dispatch(fetchFavoriteSuccess(favorites));
    })
    .catch((error) => {
      const errMsg = error.message;
      dispatch(fetchFavoriteFailure(errMsg));
    });
};

export { AddFavoriteAction, fetchFavoriteAction };
