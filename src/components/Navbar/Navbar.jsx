import React from 'react'
import './Navbar.css'
import Logo from './Logo/Logo'
import { AiOutlineFileSearch } from "react-icons/ai"
import { AiOutlineSetting } from "react-icons/ai"
import { AiOutlineHdd } from "react-icons/ai"
import { AiOutlineFund } from "react-icons/ai"


export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="Navbar">
        <Logo />
        <div className="Navbar-right">
          <a href="/" title="Искать слова"><AiOutlineFileSearch style={{ width: "50px", height: "50px" }} /></a>
          <a href="/" title="Список добавленных"><AiOutlineHdd style={{ width: "50px", height: "50px" }} /></a>
          <a href="/" title="Учить и развиваться"><AiOutlineFund style={{ width: "50px", height: "50px" }} /></a>
          <a href="/" title="Настройки профиля"><AiOutlineSetting style={{ width: "50px", height: "50px" }} /></a>
        </div>
      </div>
    </div>
  )
}
