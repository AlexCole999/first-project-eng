import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Footer from '../Footer/Footer';
import YandexVocabulary from './../Dashboard/YandexVocabulary/YandexVocabulary';
import { Routes, Route } from "react-router-dom";



function App(props) {
  return (
    <div className="App">
      <Navbar />
      <div className="dashboard-container">
        <div className="Dashboard">
          <div className="Dashboard-content">
            <Routes>
              <Route exact path="/" element={<div>Инструкция к применению</div>}>
              </Route>
              <Route exact path="/addword" element={<YandexVocabulary />}>
              </Route>
              <Route exact path="/mywords" element={<div>Здесь будет список слов с сервера</div>}>
              </Route>
              <Route exact path="/progress" element={<div>Здесь будет игра и статистика добавленных и выученных</div>}>
              </Route>
              <Route exact path="/profile" element={<div>Здесь будет информация о профиле и настройки</div>}>
              </Route>
            </Routes>
            <button onClick={() => console.log(1)}></button>
          </div>
        </div >
      </div>
      <Footer />
    </div>
  );
}

export default App;
