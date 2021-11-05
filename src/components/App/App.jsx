import React from 'react';
import './App.css';
import YandexVocabulary from './../Dashboard/YandexVocabulary/YandexVocabulary';
import Footer from '../Footer/Footer';
import { AiOutlineFileSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHdd } from "react-icons/ai";
import { AiOutlineFund } from "react-icons/ai";
import { Routes, Route, NavLink } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <div className="navbar-container">
        <div className="Navbar">
          <div className="Logo">
            <div className="Logo-word">
              <a href="/">ENGLISH</a>
            </div>
          </div>
          <div className="Navbar-right">
            <NavLink to={"/addword"} className="Navbar-right-elem" title="Искать слова"><AiOutlineFileSearch style={{ width: "55px", height: "55px" }} /></NavLink>
            <NavLink to={"/mywords"} className="Navbar-right-elem" title="Добавленные слова"><AiOutlineHdd style={{ width: "55px", height: "55px" }} /></NavLink>
            <NavLink to={"/progress"} className="Navbar-right-elem" title="Учить (Мой прогресс)"><AiOutlineFund style={{ width: "55px", height: "55px" }} /></NavLink>
            <NavLink to={"/profile"} className="Navbar-right-elem" title="Настройки (Профиль)"><AiOutlineUser style={{ width: "55px", height: "55px" }} /></NavLink>
          </div>
        </div>
      </div>
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
