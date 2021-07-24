import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from '../actions/actionTypes';

const init = {
  user: {},
  error: '',
};

const loginReducer = (state = init, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: '',
      };
    case LOGIN_USER_FAILURE:
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
