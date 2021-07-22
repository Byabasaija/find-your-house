import { combineReducers } from 'redux';
import housesReducer from './houses';
import loginReducer from './users';

const rootReducer = combineReducers({
  houses: housesReducer,
  login: loginReducer,
});

export default rootReducer;
