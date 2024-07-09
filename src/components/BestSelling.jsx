import React from 'react'
import shoe from "../assets/border-shoe.png"

const BestSelling = () => {
    return (
        <div className='billing container'>
            <div className="billing-text">
                <h3>Best Selling Product</h3>
            </div>
            <div className="img-card">
                <div className="card-one">
                    <div className="card-img">
                    <p>-20%</p>
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
                    <p>-20%</p>
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
                    <p>-20%</p>
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
                    <p>-20%</p>
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
                    <p>-20%</p>
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
                    <p>-20%</p>
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
            </div>

            <div className="best-selling-btn">
                <a href="#">View all products</a>
            </div>
        </div>
    )
}

export default BestSelling
