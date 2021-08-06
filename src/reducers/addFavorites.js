import {
  ADD_FAVORITE_SUCCESS,
  ADD_FAVORITE_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  fav: {},
  status: '',

};

const addFavReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE_SUCCESS:
      return {
        ...state,
        fav: action.payload,
        status: 'Created successfully',
      };
    case ADD_FAVORITE_FAILURE:
      return {
        ...state,
        fav: action.payload,
        status: 'Failed to create, try again later',
      };
    default:
      return state;
  }
};

export default addFavReducer;
