import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const saveToLocalStorage = (state) => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('persistantState', serialisedState);
  } catch (e) {
    console.warn(e);
  }
};
const loadFromLocalStorage = () => {
  try {
    const serialisedState = localStorage.getItem('persistantState');
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, loadFromLocalStorage(),
  composeEnhancer(applyMiddleware(thunk)));

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
