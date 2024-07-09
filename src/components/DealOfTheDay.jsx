import React from 'react'
import shoe from "../assets/shoe.png"
import shirt from '../assets/shirt.png'
import watch from "../assets/watch.png"
import bag from "../assets/bag.png"
import coat from "../assets/coat.png"
import speaker from "../assets/speaker.png"


const DealOfTheDay = () => {
    return (
        <div className='deals container'>
            <div className="deals-text">
                <h3>Deal of the Day</h3>
                <a href="#">View all</a>
            </div>
            <div className="img-card">
                <div className="card-one">
                    <div className="card-img">
                        <img src={shoe} alt="shoe" />
                    </div>
                    <div className="card-text">
                        <h4 className='product-name'>nike air max dn</h4>
                        <p className=' category'>shoes & bags</p>
                        <div className="price">
                            <p>$52</p>
                            <span>$62.4</span>
                        </div>
                    </div>
                </div>

                <div className="card-one">
                    <div className="card-img">
                        <img src={shirt} alt="shirt" />
                    </div>
                    <div className="card-text">
                        <h4 className='product-name'>calvin slim fit shirt</h4>
                        <p className=' category'>men's fashion</p>
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
                        <img src={coat} alt="coat" />
                    </div>
                    <div className="card-text">
                        <h4 className='product-name'>fedan raincoat</h4>
                        <p className=' category'>men's fashion</p>
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

export default DealOfTheDay
