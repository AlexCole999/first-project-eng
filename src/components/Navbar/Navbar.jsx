import React from 'react'
import './Navbar.css'
import NavbarElem from './NavbarElem/NavbarElem'
import Logo from './Logo/Logo'

export default function Navbar() {
  return (
    <div className="Navbar">
      <Logo />
      <div className="Navbar-container">
        <NavbarElem name="1th" />
        <NavbarElem name="2th" />
        <NavbarElem name="3th" />
        <NavbarElem name="4th" />
      </div>
    </div>
  )
}
