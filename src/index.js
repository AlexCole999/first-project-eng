import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebase/firebaseConfig';
import { getFirestore } from 'firebase/firestore';

const Reducer = (state = 1, action) => {
  switch (action.type) {
    case 'ACTION1':
      return state + 1
    case 'ACTION2':
      return state - 1
    default:
      return state;
  }
};

const appfirebase = initializeApp(firebaseConfig);
const firebase = getFirestore();
let store = createStore(Reducer);

let app = (
  <BrowserRouter>
    <Provider store={store}>
      <App firebase={firebase} />
    </Provider>
  </BrowserRouter>)

ReactDOM.render(app, document.getElementById('root'));

