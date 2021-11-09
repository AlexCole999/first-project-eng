import React from 'react';
import './Navbar.css';
import { AiOutlineFileSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHdd } from "react-icons/ai";
import { AiOutlineFund } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
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
  )
}
