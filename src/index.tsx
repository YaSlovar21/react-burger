import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, applyMiddleware, compose } from 'redux';

import reportWebVitals from './reportWebVitals';
import { rootReducer } from './services/reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { composeEnhancers } from './utils/redux-compose';
import { socketMiddleware } from './services/middlewares/socketMiddleware';

const enhancer = composeEnhancers(
    applyMiddleware(thunk), 
    applyMiddleware(socketMiddleware('wss://norma.nomoreparties.space/orders/all')),
    applyMiddleware(socketMiddleware('wss://norma.nomoreparties.space/orders', true))
);

const store = createStore(rootReducer, enhancer);

const root = ReactDOM.createRoot(
  document.getElementById('root')  as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
