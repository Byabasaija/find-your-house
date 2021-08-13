import houses from '../../reducers/houses';
import {
  FETCH_HOUSES_REQUEST,
  FETCH_HOUSES_SUCCESS,
  FETCH_HOUSES_FAILURE,
} from '../../actions/actionTypes';

describe('houses reducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      loading: false,
      houses: [],
      error: '',
    };
  });

  test('should return initial state', () => {
    expect(houses(undefined, {})).toEqual(initialState);
  });

  test('should return the loading status', () => {
    const action = {
      type: FETCH_HOUSES_REQUEST,
    };
    expect(houses(initialState, action)).toEqual({
      ...initialState,
      loading: true,
    });
  });

  test('should return the error status with error', () => {
    const action = {
      type: FETCH_HOUSES_FAILURE,
      error: 'Error while fetching data.',
    };
    expect(houses(initialState, action)).toEqual({
      ...initialState,
      error: action.payload,
    });
  });

  test('should return the success status with meals', () => {
    const action = {
      type: FETCH_HOUSES_SUCCESS,
      houses: [
        {
          id: '1',
          image_url: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          decription: 'test description',
        },
      ],
    };
    expect(houses(initialState, action)).toEqual({
      ...initialState,
      error: '',
      houses: action.payload,
    });
  });
});
