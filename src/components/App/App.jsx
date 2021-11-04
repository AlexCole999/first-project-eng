import React from 'react';
import './App.css';
import YandexVocabulary from './../Dashboard/YandexVocabulary/YandexVocabulary';
import Footer from '../Footer/Footer';
import { AiOutlineFileSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHdd } from "react-icons/ai";
import { AiOutlineFund } from "react-icons/ai";

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
            <a href="/" className="Navbar-right-elem" title="Искать слова"><AiOutlineFileSearch style={{ width: "55px", height: "55px" }} /></a>
            <a href="/" className="Navbar-right-elem" title="Добавленные слова"><AiOutlineHdd style={{ width: "55px", height: "55px" }} /></a>
            <a href="/" className="Navbar-right-elem" title="Учить (Мой прогресс)"><AiOutlineFund style={{ width: "55px", height: "55px" }} /></a>
            <a href="/" className="Navbar-right-elem" title="Настройки (Профиль)"><AiOutlineUser style={{ width: "55px", height: "55px" }} /></a>
          </div>
        </div>
      </div>
      <div className="dashboard-container">
        <div className="Dashboard">
          <div className="Dashboard-content">
            <YandexVocabulary />
            <button onClick={() => console.log(1)}></button>
          </div>
        </div >
      </div>
      <Footer />
    </div>
  );
}

export default App;
