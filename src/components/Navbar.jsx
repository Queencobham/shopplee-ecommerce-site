import React, { useState } from 'react'
import Heart from '../assets/heart.png'
import CartImg from '../assets/cart.png'
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='container'>
      <nav>
        <img src={logo} alt="shopplee" />

        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes className='fa-times' /> : <GiHamburgerMenu className='fa-bars' />}
        </div>

        <div className="nav-links">
          <ul className={isMenuOpen ? "nav-menu open" : "nav-menu"}>
            <span>
              <li><a href="#">home</a></li>
              <li><a href="#">contact</a></li>
              <li><a href="#">shop</a></li>
              <li><a href="#">categories</a></li>
              <li><a href="#">about us</a></li>
            </span>

            <div className="nav-btn mobile">
              <img src={Heart} alt="double heart shape" />
              <Link to="/cartpage"><img src={CartImg} alt="shopping cart" /></Link>
              <a href="#" className='nav-button'>dashboard</a>
            </div>

          </ul>
        </div>
        <div className="nav-btn desktop">
          <img src={Heart} alt="double heart shape" />
          <Link to="/cartpage"><img src={CartImg} alt="shopping cart" /></Link>
          <a href="#" className='nav-button'>dashboard</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
