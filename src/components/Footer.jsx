import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={logo} alt="shopplee" />
      </div>
      <div className="footer-links">
        <div className="footer-support footer-info">
            <h4>support</h4>
            <div className="support-text">
            <p className="address">Sagamu, Nigeria</p>
            <p className="email">exclusive@gmail.com</p>
            <p className="phone-number">+88015-88888-9999</p>
            </div>
        </div>
        <div className="footer-account footer-info">
            <h4>account</h4>
            <ul>
                <li><a href="#">my account</a></li>
                <li><a href="#">login/register</a></li>
                <li><a href="#">cart</a></li>
                <li><a href="#">wishlist</a></li>
                <li><a href="#">shop</a></li>
            </ul>
        </div>

        <div className="footer-account footer-info">
            <h4>quick link</h4>
            <ul>
                <li><a href="#">privacy policy</a></li>
                <li><a href="#">terms of use</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">contact</a></li>
            </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
