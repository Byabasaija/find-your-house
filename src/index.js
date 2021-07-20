import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store/configureStore';

const initialState = {
  houses: [
    {

      description: '2100 Club, the world’s first blockchain bar, designed by LYCS Architecture.The bar is participated by many well-known entrepreneurs and cornerstone investors in the Blockchain industry. 2100 Club is a social platform that shares and exchanges the cutting edge blockchain technologies, researches and investments. The slogan of 2100Club shares the idea ‘to own, to live to live until 2100’ to all the new economic drivers and innovators. It has been further developed as the basis design concept of interior space which interpreting its intellectual spirit instead of creating a theme bar.',
      id: 39,
      image_url: 'https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80',
      name: 'aliquam',

    },
  ],

};

const store = configureStore(initialState);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
