import React from 'react'
import img1 from '../assets/workout.png'
import img2 from '../assets/band.png'
import img3 from '../assets/sneakers.png'

const NewArrivals = () => {
    return (
        <div className='new-arrival container'>
          <h2>new arrival</h2>
            <div class="image-grid">
                <span className="image-grid-col-2 image-grid-row-2" >
                    <img src={img1} alt="workout outfit" />
                    <p>Bask in the sun with our exercise outfits</p>
                </span>
                <span>
                    <img src={img2} alt="workout band" />
                    <p>Stretch those muscles</p>
                </span>
                <span className="image-grid-col-3">
                    <img src={img3} alt="running shoes" />
                    <p>Become the flash when you run on the track</p>
                </span>
            </div>
        </div>
    )
}

export default NewArrivals
