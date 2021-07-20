import { combineReducers } from 'redux';
import housesReducer from './houses';

const rootReducer = combineReducers({
  houses: housesReducer,

});

export default rootReducer;
