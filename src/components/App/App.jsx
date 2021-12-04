import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Dashboard from './Dashboard/Dashboard';
import Footer from './Footer/Footer';

export default function App(props) {
  return (
    <div className="App">
      <Navbar />
      <Dashboard firebase={props.firebase} />
      <Footer />
    </div>
  );
}
