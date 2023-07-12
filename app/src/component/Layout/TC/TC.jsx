import React from 'react'
import "./TC.css"
const TC = () => {
  return (
    <div>
         <div className="main-box">
            <div className="header-text1">
              <h1>Welcome to Our Mcommerce Store</h1>
              <p>Discover a World of Amazing Products</p>
              <a href="/products" className="explore-button">
                Explore Now
              </a>
            </div>

            <div className="header-image1">
              <img src={shopping} alt="Logo" />
            </div>
          </div>
    </div>
  )
}

export default TC