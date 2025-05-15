import React from 'react'
import './Program.css'
import program_1 from '../../assets/Events.jpg'
import program_2 from '../../assets/Connections.jpg'
import program_3 from '../../assets/Workouts.jpg'

import p_icon_1 from '../../assets/calendar.png'
import p_icon_2 from '../../assets/friends.png'
import p_icon_3 from '../../assets/swim.png'

const Program = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program_1} alt="events"/>
            <div className="caption">
                <img src={p_icon_1} alt="events icon" />
                <p>Events and Activites</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt="connections"/>
            <div className="caption">
                <img src={p_icon_2} alt="connections icon" />
                <p>Connections</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt="workouts"/>
            <div className="caption">
                <img src={p_icon_3} alt="workouts icon" />
                <p>Workouts</p>
            </div>
        </div>

    </div>
  )
}

export default Program