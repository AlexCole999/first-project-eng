import React from 'react';
import './Navbar.css';
import { AiOutlineFileSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHdd } from "react-icons/ai";
import { AiOutlineFund } from "react-icons/ai";
import { NavLink, Routes, Route } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="Navbar">
        <div className="Logo">
          <div className="Logo-word">
            <a href="/">ENGLISH</a>
          </div>
        </div>
        <Routes>
          <Route
            exact path="/"
            element={<div className="Navbar-right">
              <NavLink to={"/addword"} className="Navbar-right-elem" title="Искать слова"><AiOutlineFileSearch style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/mywords"} className="Navbar-right-elem" title="Добавленные слова"><AiOutlineHdd style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/progress"} className="Navbar-right-elem" title="Учить (Мой прогресс)"><AiOutlineFund style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/profile"} className="Navbar-right-elem" title="Настройки (Профиль)"><AiOutlineUser style={{ width: "55px", height: "55px" }} /></NavLink>
            </div>}>
          </Route>
          <Route
            exact path="/addword"
            element={<div className="Navbar-right">
              <NavLink to={"/addword"} style={{ border: "3px solid rgb(111, 111, 220)", backgroundColor: "white", color: "rgb(34, 85, 224)" }} className="Navbar-right-elem" title="Искать слова"><AiOutlineFileSearch style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/mywords"} className="Navbar-right-elem" title="Добавленные слова"><AiOutlineHdd style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/progress"} className="Navbar-right-elem" title="Учить (Мой прогресс)"><AiOutlineFund style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/profile"} className="Navbar-right-elem" title="Настройки (Профиль)"><AiOutlineUser style={{ width: "55px", height: "55px" }} /></NavLink>
            </div>}>
          </Route>
          <Route
            exact path="/mywords"
            element={<div className="Navbar-right">
              <NavLink to={"/addword"} className="Navbar-right-elem" title="Искать слова"><AiOutlineFileSearch style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/mywords"} style={{ border: "3px solid rgb(111, 111, 220)", backgroundColor: "white", color: "rgb(34, 85, 224)" }} className="Navbar-right-elem" title="Добавленные слова"><AiOutlineHdd style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/progress"} className="Navbar-right-elem" title="Учить (Мой прогресс)"><AiOutlineFund style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/profile"} className="Navbar-right-elem" title="Настройки (Профиль)"><AiOutlineUser style={{ width: "55px", height: "55px" }} /></NavLink>
            </div>}>
          </Route>
          <Route
            exact path="/progress"
            element={<div className="Navbar-right">
              <NavLink to={"/addword"} className="Navbar-right-elem" title="Искать слова"><AiOutlineFileSearch style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/mywords"} className="Navbar-right-elem" title="Добавленные слова"><AiOutlineHdd style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/progress"} style={{ border: "3px solid rgb(111, 111, 220)", backgroundColor: "white", color: "rgb(34, 85, 224)" }} className="Navbar-right-elem" title="Учить (Мой прогресс)"><AiOutlineFund style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/profile"} className="Navbar-right-elem" title="Настройки (Профиль)"><AiOutlineUser style={{ width: "55px", height: "55px" }} /></NavLink>
            </div>}>
          </Route>
          <Route
            exact path="/profile"
            element={<div className="Navbar-right">
              <NavLink to={"/addword"} className="Navbar-right-elem" title="Искать слова"><AiOutlineFileSearch style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/mywords"} className="Navbar-right-elem" title="Добавленные слова"><AiOutlineHdd style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/progress"} className="Navbar-right-elem" title="Учить (Мой прогресс)"><AiOutlineFund style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/profile"} style={{ border: "3px solid rgb(111, 111, 220)", backgroundColor: "white", color: "rgb(34, 85, 224)" }} className="Navbar-right-elem" title="Настройки (Профиль)"><AiOutlineUser style={{ width: "55px", height: "55px" }} /></NavLink>
            </div>}>
          </Route>
        </Routes>

      </div>
    </div>
  )
}
