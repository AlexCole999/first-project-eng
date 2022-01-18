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

let defaultstateone = { some1: 1, count: 0 }
let defaultstatetwo = { some2: 2, count: 0 }

let reducerone = (state = defaultstateone, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return { ...state, count: state.count + 1, data: action.data }
    default: return state
  }
}
let reducertwo = (state = defaultstatetwo, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 }
    default: return state
  }
}
let combinedReducers = combineReducers({
  first: reducerone,
  second: reducertwo
})

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

