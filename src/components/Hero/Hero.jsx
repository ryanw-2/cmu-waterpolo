import React from 'react'
import './Hero.css'
import arrow from '../../assets/right_arrow.png'
import secret from '../../assets/right_arrow_white.png'

const Hero = () => {

  const onClick = () =>{
    'https://www.instagram.com/cmuwaterpolo/'
  }

  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We play water polo</h1>
            <p>Join us in the Cohon University Center pool, no prior
                experience is necessary
            </p>
            <div className='sclBtn'>
              <a href="https://www.instagram.com/cmuwaterpolo/">Follow Us</a>
              <img src={arrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero