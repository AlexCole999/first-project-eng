import React from 'react';
import './Dashboard.css';
import YandexVocabulary from './YandexVocabulary/YandexVocabulary';
import { Routes, Route } from "react-router-dom";

export default function Dashboard() {
  return (
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
        </div>
      </div >
    </div>
  )
}