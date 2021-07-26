/* eslint-disable camelcase */
import axios from 'axios';
import {
  FETCH_FAVORITE_REQUEST,
  FETCH_FAVORITE_SUCCESS,
  FETCH_FAVORITE_FAILURE,
} from './actionTypes';

// const AddFavoriteSuccess = (favorites) => ({
//   type: ADD_FAVORITE_SUCCESS,
//   payload: favorites,
// });

// const AddFavoriteFailure = (error) => ({
//   type: ADD_FAVORITE_FAILURE,
//   payload: error,
// });

const AddFavoriteAction = (user_id, house_id) => async () => {
  axios
    .post(
      'http://localhost:3001/favorites',
      {
        user_id,
        house_id,
      },
      { withCredentials: true },
    )
    .then((response) => {
      const favorites = response.data;
      //   dispatch(AddFavoriteSuccess(favorites));
      console.log(favorites);
    })
    .catch((error) => {
      const errMsg = error.message;
      //   dispatch(AddFavoriteFailure(errMsg));
      console.log(errMsg);
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
      `http://localhost:3001/sessions/${id}`,
      { withCredentials: true },
    )
    .then((response) => {
      const favorites = response.data;
      dispatch(fetchFavoriteSuccess(favorites));
      console.log(favorites);
    })
    .catch((error) => {
      const errMsg = error.message;
      dispatch(fetchFavoriteFailure(errMsg));
      console.log(errMsg);
    });
};

export { AddFavoriteAction, fetchFavoriteAction };
