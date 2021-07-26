import login from '../../reducers/loginUser';
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
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

  test('should return initial state', () => {
    expect(login(undefined, {})).toEqual(initialState);
  });

  test('should return the error status with error', () => {
    const action = {
      type: LOGIN_USER_FAILURE,
      error: 'Error while logging data.',
    };
    expect(login(initialState, action)).toEqual({
      ...initialState,
      error: action.payload,
    });
  });

  test('should return the logged status true', () => {
    const action = {
      type: LOGIN_USER_SUCCESS,
      user: {},
    };
    expect(login(initialState, action)).toEqual({
      ...initialState,

      isLogged: true,
      user: action.payload,
      error: '',
    });
  });

  test('should return the error status with error', () => {
    const action = {
      type: LOGOUT_USER_FAILURE,
      error: 'Error while logging out.',
    };
    expect(login(initialState, action)).toEqual({
      ...initialState,
      error: action.payload,
    });
  });

  test('should return the logged status false', () => {
    const action = {
      type: LOGOUT_USER_SUCCESS,
      user: {},
    };
    expect(login(initialState, action)).toEqual({
      ...initialState,

      isLogged: false,
      user: action.payload,
      error: '',
    });
  });
});
