import React from 'react'
import Navbar from './Navbar'
import Marquee from './Marquee'
import visa from '../assets/visa.png'
import mastercard from '../assets/mastercard.png'
import visatwo from '../assets/mobile-visa.png'
import mastertwo from '../assets/mobile-master.png'
import { Link } from "react-router-dom"

const Checkout = () => {
    return (
        <>
            <Navbar />
            <Marquee />
            <div className='checkoutpage'>
                <div className="billing container">
                    <div className="links">
                    <Link to="/">shop</Link>
                        <p>/</p>
                        <Link to="/cartpage">cart</Link>
                        <p>/</p>
                        <a href="#" className='link-a'>checkout</a>
                    </div>
                    <h1>Billing Details</h1>
                    <div className="mobile-visa">
                        <img src={visatwo} alt="" />
                        <img src={mastertwo} alt="" />
                    </div>
                    <h2>Ademikun Michael</h2>
                    <div className="form-flex">
                        <form className='checkoutform'>
                            <span>
                                <p>Delivery address</p>
                                <input type='text' placeholder='Enter the delivery address' required />
                            </span>
                            <span>
                                <p>Contact details</p>
                                <input type='text' placeholder='Enter the contact number' required />
                            </span>
                            <span>
                                <p>Enter card details</p>
                                <input type='text' placeholder='123423626997327' required />
                            </span>

                            <div className="card-details">
                                <span>
                                    <p>Expiry Date</p>
                                    <input type="date" placeholder='MM/YY' required />
                                </span>

                                <span>
                                    <p>CVC</p>
                                    <input type="password" placeholder='****' required />
                                </span>
                            </div>

                            <div className="card-radio">
                                <input type="radio" checked="checked" /><img src={visa} alt='visa logo' />
                                <input type="radio" className='mastercard' /><img src={mastercard} alt='master logo' />
                            </div>

                            <div className="pay-on-delivery">
                                <input type="radio" /><p>pay on delivery</p>
                            </div>
                        </form>

                        <div className="cart-checkout ">
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
                                <a href="#">Place order</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout