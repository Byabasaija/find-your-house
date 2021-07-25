import { combineReducers } from 'redux';
import housesReducer from './houses';
import loginReducer from './loginUser';
import houseReducer from './house';
import favoritesReducer from './favorites';

const rootReducer = combineReducers({
  login: loginReducer,
  houses: housesReducer,
  house: houseReducer,
  favorites: favoritesReducer,

});

export default rootReducer;
