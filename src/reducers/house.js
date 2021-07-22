import {
  FETCH_HOUSE_REQUEST,
  FETCH_HOUSE_SUCCESS,
  FETCH_HOUSE_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  loding: false,
  house: {},
  error: '',

};

const houseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOUSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_HOUSE_SUCCESS:
      return {
        ...state,
        house: action.payload,
        error: '',
      };

    case FETCH_HOUSE_FAILURE:
      return {
        ...state,
        house: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default houseReducer;
