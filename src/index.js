import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './Index.css';
import App from './App';
import store from './app/sotre';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
