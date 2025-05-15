import React from 'react'
import './Team.css'
import team_img from '../../assets/Locker.jpg'
import vid from '../../assets/snow.mov'
import play_icon from '../../assets/play.png'

const Team = () => {
  return (
    <div className='team'>
        <div className="team-left">
            <video src={vid} autoPlay muted controls loop className='team-img'/>
            {/* <img src={play_icon} alt="" className='play-icon'/> */}
        </div>
        <div className="team-right">
            <h3>What you can expect to gain</h3>
            <p>Whether you've been playing for 10-years  or have just begun, are a incoming freshman or a 
                sixth-year PhD student, our exec-team works with everyone to help find their place in the pool. 
            </p>
            <p>    
                We practice 
                three times a week every semester and thoroughly enjoy playing scrimmages with the local Pittsburgh area teams. 
                As a club sport, we understand that commitment to practice is whatever you can afford it to be. That being said, 
                we are convinced that you'll find our sport and team worthwhile.  New members are welcomed at any practice.</p>
        </div>
    </div>
  )
}

export default Team