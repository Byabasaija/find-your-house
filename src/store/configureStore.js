import {
  applyMiddleware, createStore, compose,
} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from '../reducers/index';
import setAuthToken from '../utils/authToken';

const persistConfig = {
  key: 'primary',
  storage,
  whitelist: ['addFav'],
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

setAuthToken(sessionStorage.token);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, {}, composeEnhancer(applyMiddleware(thunk)));
const persistor = persistStore(store);

export { store, persistor };
