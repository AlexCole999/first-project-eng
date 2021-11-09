import React from 'react';
import './App.css';
import YandexVocabulary from './../Dashboard/YandexVocabulary/YandexVocabulary';
import Footer from '../Footer/Footer';
import { AiOutlineFileSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHdd } from "react-icons/ai";
import { AiOutlineFund } from "react-icons/ai";
import { Routes, Route, NavLink } from "react-router-dom";
import Navbar from './Navbar/Navbar';


function App(props) {
  return (
    <div className="App">
      <Navbar />
      <div className="dashboard-container">
        <div className="Dashboard">
          <div className="Dashboard-content">
            <Routes>
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
