import React from 'react'
import HeroImg from '../assets/hero.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <h2>Shop on Shopple</h2>
        <h3>Get 20% off on all orders</h3>
      </div>
     <div className="hero-img">
        <img src={HeroImg} alt="" />
     </div>
    </div>
  )
}

export default Hero
