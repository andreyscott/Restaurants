import React from 'react'

import './home.scss'
import home from '../../img/home.png'

function Home() {
  return (
      <section>
    <div className="showcase-content">
    <div className="container">
      <div className="showcase-text">
        <h1>Restaurant Website</h1>
        <h2>Food The Most Precious Things</h2>
        <a href="#" className="btn">Today's Menu</a>
      </div>
      <img src={home} alt="home Image" />
    </div>
  </div>
</section>
  )
}

export default Home