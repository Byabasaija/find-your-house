import axios from 'axios';
import {

  FETCH_HOUSES_REQUEST,
  FETCH_HOUSES_SUCCESS,
  FETCH_HOUSES_FAILURE,

} from './actionTypes';

const fetchHouses = () => async (dispatch) => {
  dispatch({ type: FETCH_HOUSES_REQUEST });

  try {
    const response = await axios.get(
      'https://houses-api1.herokuapp.com/houses/',
    );

    dispatch({ type: FETCH_HOUSES_SUCCESS, payload: response.data.houses });
  } catch (error) {
    dispatch({ type: FETCH_HOUSES_FAILURE }, error);
  }
};

export default fetchHouses;
