import {
  LOGIN,
} from '../actions/actionTypes';

const init = {
  isLogged: false,
};

const loginReducer = (state = init, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogged: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
