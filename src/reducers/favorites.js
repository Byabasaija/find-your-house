import {
  FETCH_FAVORITE_REQUEST,
  FETCH_FAVORITE_SUCCESS,
  FETCH_FAVORITE_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  loding: false,
  favorites: [],
  error: '',

};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FAVORITE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FAVORITE_SUCCESS:
      return {
        ...state,
        favorites: action.payload,
        error: '',
      };

    case FETCH_FAVORITE_FAILURE:
      return {
        ...state,
        favorites: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default favoritesReducer;
