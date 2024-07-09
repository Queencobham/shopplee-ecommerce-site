import React from 'react'
import { CiSearch } from "react-icons/ci";

const NewSeason = () => {
  return (
    <div className='new-season container'>
      <h3>new season, <br /> new products, new trends</h3>
      <div className="search-container">
        <span className="search-icon"><CiSearch /></span>
        <input type="text" placeholder="What are you looking for?" />
      </div>
      <div className="categories">
        <h4>Browse by Categories</h4>
        <div className="scroll-container">
          <div className="item all">all</div>
          <div className="item">women's fashion</div>
          <div className="item">men's fashion</div>
          <div className="item">baby and toys</div>
          <div className="item">bags and shoes</div>
          <div className="item">electronics</div>
        </div>
      </div>
    </div>
  )
}

export default NewSeason
