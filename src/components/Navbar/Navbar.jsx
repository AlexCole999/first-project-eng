import React from 'react'
import './Navbar.css'
import Logo from './Logo/Logo'
import { AiOutlineFileSearch } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { AiOutlineHdd } from "react-icons/ai"
import { AiOutlineFund } from "react-icons/ai"

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="Navbar">
        <Logo />
        <div className="Navbar-right">
          <a href="/" className="Navbar-right-elem" title="Искать слова"><AiOutlineFileSearch style={{ width: "55px", height: "55px" }} /></a>
          <a href="/" className="Navbar-right-elem" title="Добавленные слова"><AiOutlineHdd style={{ width: "55px", height: "55px" }} /></a>
          <a href="/" className="Navbar-right-elem" title="Учить (Мой прогресс)"><AiOutlineFund style={{ width: "55px", height: "55px" }} /></a>
          <a href="/" className="Navbar-right-elem" title="Настройки (Профиль)"><AiOutlineUser style={{ width: "55px", height: "55px" }} /></a>
        </div>
      </div>
    </div>
  )
}
