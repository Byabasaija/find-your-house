import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const configureStore = (initialState) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  return store;
};

export default configureStore;
