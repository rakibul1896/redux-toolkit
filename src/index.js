import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './Index.css';
import App from './App';
import store from './store';

// console.log(store.getState())
// const unsubscribe = store.subscribe(() =>
//   console.log('State after dispatch: ', store.getState())
// )
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
// store.dispatch({ type: 'todos/todoToggled', payload: 0 })

// store.dispatch({
//   type: 'filters/colorFilterChanged',
//   payload: { color: 'red', changeType: 'added' }
// })
// unsubscribe();

// store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating a store' })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
