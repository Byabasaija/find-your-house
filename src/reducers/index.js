import { combineReducers } from 'redux';
import housesReducer from './houses';
import loginReducer from './loginUser';
import houseReducer from './house';

const rootReducer = combineReducers({
  login: loginReducer,
  houses: housesReducer,
  house: houseReducer,

});

export default rootReducer;
