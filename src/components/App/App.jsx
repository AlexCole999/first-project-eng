import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Dashboard from './Dashboard/Dashboard';
import Footer from './Footer/Footer';
import { firebaseConfig } from './../../firebase/firebaseConfig';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { useDispatch } from 'react-redux';

const appfirebase = initializeApp(firebaseConfig);
const firebase = getFirestore();

export default function App() {
  const dispatch = useDispatch()
  dispatch({ type: "ADD_FIREBASE_TO_REDUX", firebase: firebase })
  return (
    <div className="App">
      <Navbar />
      <Dashboard firebase={firebase} />
      <Footer />
    </div>
  );
}
