import React from 'react'
import './Navbar.css'
import NavbarElem from './NavbarElem/NavbarElem'
import Logo from './Logo/Logo'


export default function Navbar() {
  return (
    <div className="Navbar">
      <Logo />
      <div className="Navbar-container">
        <NavbarElem name="Добавить слова" />
        <NavbarElem name="Список добавленных" />
        <NavbarElem name="Игра" />
        <NavbarElem name="Настройки аккаунта" />
      </div>
    </div>
  )
}
