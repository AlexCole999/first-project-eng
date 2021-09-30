import React from 'react';
import './NavbarElem.css'

export default function NavbarElem(props) {
  return (
    <div className="Navbar-elem">
      {props.name}
    </div>
  )
}

