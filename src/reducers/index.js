import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import housesReducer from './houses';
import loginReducer from './loginUser';
import houseReducer from './house';
import favoritesReducer from './favorites';

const rootReducer = combineReducers({
  login: loginReducer,
  houses: housesReducer,
  house: houseReducer,
  favorites: favoritesReducer,
  toastr: toastrReducer,

});

export default rootReducer;
