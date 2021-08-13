import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_SUCCESS,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from '../actions/actionTypes';

const init = {
  isLogged: false,
  user: { },
  error: '',
};

const loginReducer = (state = init, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        user: action.payload,
        isLogged: true,
        error: '',
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        user: {},
        error: action.payload,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        user: action.payload,
        error: '',
      };
    case REGISTER_USER_SUCCESS:
      return {
        isLogged: true,
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
