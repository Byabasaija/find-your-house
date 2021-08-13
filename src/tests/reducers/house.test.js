import house from '../../reducers/house';
import {
  FETCH_HOUSE_REQUEST,
  FETCH_HOUSE_SUCCESS,
  FETCH_HOUSE_FAILURE,
} from '../../actions/actionTypes';

describe('favorite reducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      house: {},
      loding: false,
      error: '',
    };
  });

  test('should return initial state', () => {
    expect(house(undefined, {})).toEqual(initialState);
  });

  test('should return the loading status', () => {
    const action = {
      type: FETCH_HOUSE_REQUEST,
    };
    expect(house(initialState, action)).toEqual({
      ...initialState,
      loading: true,
    });
  });

  test('should return the error status with error', () => {
    const action = {
      type: FETCH_HOUSE_FAILURE,
      error: 'Error while fetching data.',
    };
    expect(house(initialState, action)).toEqual({
      ...initialState,
      error: action.payload,
    });
  });

  test('should return the success with houses', () => {
    const action = {
      type: FETCH_HOUSE_SUCCESS,
      data: {
        id: '1',
        image_url: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        decription: 'test description',
      },
    };
    expect(house(initialState, action)).toEqual({
      ...initialState,
      error: '',
      house: action.payload,
    });
  });
});
