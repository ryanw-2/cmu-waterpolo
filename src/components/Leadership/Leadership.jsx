import React from 'react'
import './Leadership.css'
import profile_1 from '../../assets/ryan.jpg'
import profile_2 from '../../assets/richard.jpg'
import profile_3 from '../../assets/david.jpg'
import profile_4 from '../../assets/ali.jpg'
import profile_5 from '../../assets/henry.jpg'


const Leadership = () => {
  return (
    <div className='leadership'>
      
      <div className="first-card">
        <div className="first-caption">
          <p>Meet our lovely leadership team! To learn more about
          each one, hover on their card to reveal more information.
          </p>
        </div>
      </div>
      <div className="card">
        <img src={profile_1} alt="" />
        <div className="caption">
          <h3>President</h3>
          <p>Ryan Wang</p>
        </div>
      </div>

      <div className="card">
        <img src={profile_2} alt="" />
        <div className="caption">
          <h3>Vice President</h3>
          <p>Richard Humphreys</p>
        </div>
      </div>

      <div className="card">
        <img src={profile_3} alt="" />
        <div className="caption">
          <h3>Captain</h3>
          <p>David Lomakin</p>
        </div>
      </div>

      <div className="card">
        <img src={profile_4} alt="" />
        <div className="caption">
          <h3>Treasurer</h3>
          <p>Trevor Khann</p>
        </div>
      </div>

      <div className="card">
        <img src={profile_5} alt="" />
        <div className="caption">
          <h3>PR</h3>
          <p>Willie Kim</p>
        </div>
      </div>
    </div>
  )
}

export default Leadership