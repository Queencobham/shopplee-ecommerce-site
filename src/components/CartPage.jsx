import React from 'react'
import Navbar from './Navbar'
import Marquee from './Marquee'
import smallpad from '../assets/smallpad.png';
import smallcoat from '../assets/smallcoat.png';
import quantityone from '../assets/01.png'
import quantitythree from '../assets/03.png'
import { Link } from "react-router-dom"
const CartPage = () => {
    return (
        <>
            <Navbar />
            <Marquee />
            <div className='cartpage'>
                <div className="cart container">
                    <div className="links">
                        <Link to="/">shop</Link>
                        <p>/</p>
                        <a href="#" className="link-a">cart</a>
                        <p>/</p>
                        <Link to="/checkout">checkout</Link>
                    </div>

                    <div className="cart-table">
                        <div className="cart-row desktop">
                            <div className="cart-item">Product</div>
                            <div className="cart-item">Price</div>
                            <div className="cart-item">Quantity</div>
                            <div className="cart-item">Subtotal</div>
                        </div>
                        <div className="cart-row">
                            <div className="cart-item cart-img-one"><img src={smallcoat} alt="coat" />Fedan Raincoat</div>
                            <div className="cart-item price">$52</div>
                            <div className="cart-item cart-item-quan"><img src={quantityone} alt="01" /></div>
                            <div className="cart-item cart-item-subtotal">$52</div>
                        </div>
                        <div className="cart-row">
                            <div className="cart-item cart-img-two "><img src={smallpad} alt="gamepad" />PSS Double Gamepad</div>
                            <div className="cart-item price">$52</div>
                            <div className="cart-item cart-item-quan"><img src={quantitythree} alt="03" /></div>
                            <div className="cart-item cart-item-subtotal">$156</div>
                        </div>
                    </div>

                    <div className="cart-checkout">
                        <div className="coupon">
                            <input type="text" placeholder="Coupon Code" />
                            <button type="button">Apply</button>
                        </div>

                        <div className="summary">
                            <div className="subtotal">
                                <p>Subtotal:</p>
                                <p>$208</p>
                            </div>
                            <div className="delivery-fee">
                                <p>Delivery Fee:</p>
                                <p>$0</p>
                            </div>
                        </div>

                        <hr />

                        <div className="total">
                            <p>Total:</p>
                            <p>$208</p>
                        </div>

                        <div className="proceed-btn">
                            <Link to="/checkout">proceed to checkout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPage
