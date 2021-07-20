import {
  FETCH_HOUSES_REQUEST,
  FETCH_HOUSES_SUCCESS,
  FETCH_HOUSES_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  items: [],
  error: '',
};

const housesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOUSES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_HOUSES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: '',
      };
    case FETCH_HOUSES_FAILURE:
      return {
        ...state,
        items: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default housesReducer;
