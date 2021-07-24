import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from '../actions/actionTypes';

const init = {
  user: {},
  error: '',
};

const loginReducer = (state = init, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: '',
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        user: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
