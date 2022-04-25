import React from 'react';
import about from '../../img/about.png'
import  './section2.scss'

function Section2() {
  return (
    <section id="about" class="my-2">
      <div class="container">
        <img src={about} alt="" />
        <div class="about-text">
          <span>About Us</span>
          <h2>We speak the good food language</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            maxime, fuga consequatur deleniti at quod illo necessitatibus ex
            laudantium dicta!
          </p>
          <a href="#" class="btn">Learn More</a>
        </div>
      </div>
    </section>
  )
}

export default Section2