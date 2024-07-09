import React from 'react'
import Heart from '../assets/heart.png'
import CartImg from '../assets/cart.png'
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className='container'>
     <nav>
        <p>shop<span>plee</span></p>
        <div className="nav-links">
            <ul>
                <li><a href="#">home</a></li>
                <li><a href="#">contact</a></li>
                <li><a href="#">shop</a></li>
                <li><a href="#">categories</a></li>
                <li><a href="#">about us</a></li>
            </ul>
        </div>
        <div className="nav-btn">
            <img src={Heart} alt="double heart shape" />
             <Link to="/cart"><img src={CartImg} alt="shopping cart" /></Link>
            <a href="#" className='nav-button'>dashboard</a>
        </div>
     </nav>
    </div>
  )
}

export default Navbar
