import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from "react-router-dom";
import combinedReducers from './reducers/combinedReducers';

const store = createStore(combinedReducers, composeWithDevTools(applyMiddleware(thunk)))

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>)

ReactDOM.render(app, document.getElementById('root'));


