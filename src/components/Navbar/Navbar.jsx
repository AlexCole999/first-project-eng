import React from 'react'
import './Navbar.css'
import NavbarElem from './NavbarElem/NavbarElem'
import Logo from './Logo/Logo'


export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="Navbar">
        <Logo />
        <div className="Navbar-right">
          <NavbarElem name="Добавить слова" />
          <NavbarElem name="Список добавленных" />
          <NavbarElem name="Игра" />
          <NavbarElem name="Настройки аккаунта" />
        </div>
      </div>
    </div>
  )
}
