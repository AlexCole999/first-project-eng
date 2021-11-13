import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

let store = createStore(Reducer);



ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

