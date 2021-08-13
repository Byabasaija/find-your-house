import login from '../../reducers/loginUser';
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from '../../actions/actionTypes';

describe('login/logout reducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      isLogged: false,
      user: { },
      error: '',
    };
  });

  test('should return the error', () => {
    const action = {
      type: REGISTER_USER_FAILURE,
      error: 'Error while registering.',
    };
    expect(login(initialState, action)).toEqual({
      ...initialState,
      error: action.payload,
    });
  });

  test('should return the logged status true and status sucess', () => {
    const action = {
      type: REGISTER_USER_SUCCESS,
      user: {},
    };
    expect(login(initialState, action)).toEqual({
      ...initialState,

      isLogged: true,
      user: action.payload,
      error: '',
    });
  });
});
