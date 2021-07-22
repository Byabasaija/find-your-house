import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState) => {
  const store = createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(thunk)));
  return store;
};

export default configureStore;
