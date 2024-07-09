import React from 'react'
import pad2 from "../assets/pad2.png"
import laptop from '../assets/laptop.png'
import watch from "../assets/watch.png"
import bag from "../assets/bag.png"
import gamepad from "../assets/gamepad.png"
import speaker from "../assets/speaker.png"

const BestSelling = () => {
    return (
        <div className='billing container'>
            <div className="billing-text">
                <h3>Best Selling Product</h3>
            </div>
            <div className="img-card">
                <div className="card-one">
                    <div className="card-img">
                        <img src={pad2} alt="shoe" />
                    </div>
                    <div className="card-text">
                        <h4 className='product-name'>GP11 gamepad</h4>
                        <p className=' category'>electronics</p>
                        <div className="price">
                            <p>$52</p>
                            <span>$62.4</span>
                        </div>
                    </div>
                </div>

                <div className="card-one">
                    <div className="card-img">
                        <img src={laptop} alt="shirt" />
                    </div>
                    <div className="card-text">
                        <h4 className='product-name'>HP elite laptop</h4>
                        <p className=' category'>electronics</p>
                        <div className="price">
                            <p>$52</p>
                            <span>$62.4</span>
                        </div>
                    </div>
                </div>

                <div className="card-one">
                    <div className="card-img">
                        <img src={watch} alt="watch" />
                    </div>
                    <div className="card-text">
                        <h4 className='product-name'>oikos watch</h4>
                        <p className=' category'>men's fashion</p>
                        <div className="price">
                            <p>$52</p>
                            <span>$62.4</span>
                        </div>
                    </div>
                </div>

                <div className="card-one">
                    <div className="card-img">
                        <img src={bag} alt="bag" />
                    </div>
                    <div className="card-text">
                        <h4 className='product-name'>gucci duffle bag</h4>
                        <p className=' category'>shoes & bags</p>
                        <div className="price">
                            <p>$960</p>
                            <span>$1160</span>
                        </div>
                    </div>
                </div>

                <div className="card-one">
                    <div className="card-img">
                        <img src={gamepad} alt="coat" />
                    </div>
                    <div className="card-text">
                        <h4 className='product-name'>PS5 gamepad</h4>
                        <p className=' category'>electronics</p>
                        <div className="price">
                            <p>$52</p>
                            <span>$62.4</span>
                        </div>
                    </div>
                </div>

                <div className="card-one">
                    <div className="card-img">
                        <img src={speaker} alt="speaker" />
                    </div>
                    <div className="card-text">
                        <h4 className='product-name'>JBL speaker</h4>
                        <p className=' category'>electronics</p>
                        <div className="price">
                            <p>$52</p>
                            <span>$62.4</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestSelling
