import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebase/firebaseConfig';
import { getFirestore } from 'firebase/firestore';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import combinedReducers from './reducers/combinedReducers';

let store = createStore(combinedReducers, composeWithDevTools(applyMiddleware(thunk)))

const appfirebase = initializeApp(firebaseConfig);
const firebase = getFirestore();

let app = (
  <BrowserRouter>
    <Provider store={store}>
      <App firebase={firebase} />
    </Provider>
  </BrowserRouter>)

ReactDOM.render(app, document.getElementById('root'));

