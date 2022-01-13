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



const appfirebase = initializeApp(firebaseConfig);
const firebase = getFirestore();

let app = (
  <BrowserRouter>
    <App firebase={firebase} />
  </BrowserRouter>)

ReactDOM.render(app, document.getElementById('root'));

