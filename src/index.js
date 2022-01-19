import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import combinedReducers from './reducers/combinedReducers';

const store = createStore(combinedReducers, composeWithDevTools(applyMiddleware(thunk)))

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>)

ReactDOM.render(app, document.getElementById('root'));


