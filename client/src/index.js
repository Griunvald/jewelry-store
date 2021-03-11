import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import './css/bootstrap.min.css';

const configureStore = store();

ReactDOM.render(
  <Provider store={configureStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
