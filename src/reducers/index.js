import { combineReducers } from 'redux';
import housesReducer from './houses';
import loginReducer from './users';

const rootReducer = combineReducers({
  login: loginReducer,
  houses: housesReducer,

});

export default rootReducer;
