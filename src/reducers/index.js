import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import housesReducer from './houses';
import loginReducer from './loginUser';
import houseReducer from './house';
import favoritesReducer from './favorites';
import addFavReducer from './addFavorites';

const rootReducer = combineReducers({
  login: loginReducer,
  houses: housesReducer,
  house: houseReducer,
  addFav: addFavReducer,
  favorites: favoritesReducer,
  toastr: toastrReducer,

});

export default rootReducer;
