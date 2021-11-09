import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Footer from '../Footer/Footer';
import YandexVocabulary from './../Dashboard/YandexVocabulary/YandexVocabulary';
import { Routes, Route } from "react-router-dom";
import Dashboard from './../Dashboard/Dashboard';


function App(props) {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
