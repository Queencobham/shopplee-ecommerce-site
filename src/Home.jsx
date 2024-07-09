import React from 'react'
import Navbar from './components/Navbar'
import Marquee from './components/Marquee'
import Hero from './components/Hero'
import NewSeason from './components/NewSeason'
import DealOfTheDay from './components/DealOfTheDay'
import BestSelling from './components/BestSelling'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import NewArrivals from './components/NewArrivals'

const Home = () => {
  return (
    <>
     <Navbar />
     <Marquee />
     <Hero />
     <NewSeason />
     <DealOfTheDay />
     <BestSelling />
     <NewArrivals />
     <Subscribe />
     <Footer />
    </>
  )
}

export default Home
