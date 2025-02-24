import React from 'react'
import './nav.css'

const Navbar = () => {
  return (
    <nav>
        <div class="nav__content">
          <div class="logo"><a href="/">Dame un mate</a></div>
          <label for="check" class="checkbox">
            <i class="ri-menu-line"></i>
          </label>
          <input type="checkbox" name="check" id="check" />
          <ul>
            <li><a href="/" class="active">Inicio</a></li>
            <li><a href="/">Productos</a></li>
            <li><a href="/">Contacto</a></li>
            <li><a href="/">Mayorista</a></li>
          </ul>
        </div>
      </nav>
    )
};

export default Navbar;