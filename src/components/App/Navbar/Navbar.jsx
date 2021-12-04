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
            <NavLink to={"/first-project-eng/"}>E</NavLink>
          </div>
        </div>
        <Routes>
          <Route

            exact path="/first-project-eng/*"
            element={<div className="Navbar-right">
              <NavLink to={"/first-project-eng/addword"} className="Navbar-right-elem" title="Искать слова"><AiOutlineFileSearch style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/first-project-eng/mywords"} className="Navbar-right-elem" title="Добавленные слова"><AiOutlineHdd style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/first-project-eng/progress"} className="Navbar-right-elem" title="Учить (Мой прогресс)"><AiOutlineFund style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/first-project-eng/profile"} className="Navbar-right-elem" title="Настройки (Профиль)"><AiOutlineUser style={{ width: "55px", height: "55px" }} /></NavLink>
            </div>}>
          </Route>
          <Route
            exact path="/first-project-eng/addword"
            element={<div className="Navbar-right">
              <NavLink to={"/first-project-eng/addword"} style={{ backgroundColor: "white", color: "rgb(34, 85, 224)" }} className="Navbar-right-elem" title="Искать слова"><AiOutlineFileSearch style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/first-project-eng/mywords"} className="Navbar-right-elem" title="Добавленные слова"><AiOutlineHdd style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/first-project-eng/progress"} className="Navbar-right-elem" title="Учить (Мой прогресс)"><AiOutlineFund style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/first-project-eng/profile"} className="Navbar-right-elem" title="Настройки (Профиль)"><AiOutlineUser style={{ width: "55px", height: "55px" }} /></NavLink>
            </div>}>
          </Route>
          <Route
            exact path="/first-project-eng/mywords"
            element={<div className="Navbar-right">
              <NavLink to={"/first-project-eng/addword"} className="Navbar-right-elem" title="Искать слова"><AiOutlineFileSearch style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/first-project-eng/mywords"} style={{ backgroundColor: "white", color: "rgb(34, 85, 224)" }} className="Navbar-right-elem" title="Добавленные слова"><AiOutlineHdd style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/first-project-eng/progress"} className="Navbar-right-elem" title="Учить (Мой прогресс)"><AiOutlineFund style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/first-project-eng/profile"} className="Navbar-right-elem" title="Настройки (Профиль)"><AiOutlineUser style={{ width: "55px", height: "55px" }} /></NavLink>
            </div>}>
          </Route>
          <Route
            exact path="/first-project-eng/progress"
            element={<div className="Navbar-right">
              <NavLink to={"/first-project-eng/addword"} className="Navbar-right-elem" title="Искать слова"><AiOutlineFileSearch style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/first-project-eng/mywords"} className="Navbar-right-elem" title="Добавленные слова"><AiOutlineHdd style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/first-project-eng/progress"} style={{ backgroundColor: "white", color: "rgb(34, 85, 224)" }} className="Navbar-right-elem" title="Учить (Мой прогресс)"><AiOutlineFund style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/first-project-eng/profile"} className="Navbar-right-elem" title="Настройки (Профиль)"><AiOutlineUser style={{ width: "55px", height: "55px" }} /></NavLink>
            </div>}>
          </Route>
          <Route
            exact path="/first-project-eng/profile"
            element={<div className="Navbar-right">
              <NavLink to={"/first-project-eng/addword"} className="Navbar-right-elem" title="Искать слова"><AiOutlineFileSearch style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/first-project-eng/mywords"} className="Navbar-right-elem" title="Добавленные слова"><AiOutlineHdd style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/first-project-eng/progress"} className="Navbar-right-elem" title="Учить (Мой прогресс)"><AiOutlineFund style={{ width: "55px", height: "55px" }} /></NavLink>
              <NavLink to={"/first-project-eng/profile"} style={{ backgroundColor: "white", color: "rgb(34, 85, 224)" }} className="Navbar-right-elem" title="Настройки (Профиль)"><AiOutlineUser style={{ width: "55px", height: "55px" }} /></NavLink>
            </div>}>
          </Route>
        </Routes>

      </div>
    </div>
  )
}
