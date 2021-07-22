import {
  FETCH_HOUSES_REQUEST,
  FETCH_HOUSES_SUCCESS,
  FETCH_HOUSES_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  loding: false,
  houses: [],
  error: '',

};

const housesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOUSES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_HOUSES_SUCCESS:
      return {
        ...state,
        houses: action.payload,
        error: '',
      };

    case FETCH_HOUSES_FAILURE:
      return {
        ...state,
        houses: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default housesReducer;
