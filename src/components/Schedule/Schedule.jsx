import React, { useRef } from 'react'
import './Schedule.css'
import next_icon from '../../assets/right_chevron.png'
import back_icon from '../../assets/left_chevron.png'
import monday_icon from '../../assets/train.png'
import thursday_icon from '../../assets/scrim.png'
import sunday_icon from '../../assets/fun.png'

const Schedule = () => {

    const slider = useRef();
    let tx = 0;
    
    const slideForward = () => {
        if(tx > -50) {
            tx -= 30;
        }

        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if(tx < 0){
            tx += 30;
        }

        slider.current.style.transform = `translateX(${tx}%)`;
    }


  return (
    <div className='schedule'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="info">
                            <img src={monday_icon} alt="" />
                            <div>
                                <h3>Monday</h3>
                                <span>9:00pm - 11:00pm</span>
                            </div>
                        </div>
                        <p>Mondays focus on strength training and conditionning in the pool.
                            We often run swim sets, leg training, and shooting drills for the
                            duration of practice.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="info">
                            <img src={thursday_icon} alt="" />
                            <div>
                                <h3>Thursday</h3>
                                <span>7:00pm - 9:00pm</span>
                            </div>
                        </div>
                        <p>Thursdays focus on game knowledge where we often invite the Renegade 
                            Master's Team and UPitt Club Water Polo to come join us for a friendly
                            scrimmage.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="info">
                            <img src={sunday_icon} alt="" />
                            <div>
                                <h3>Sunday</h3>
                                <span>5:30pm - 7:00pm</span>
                            </div>
                        </div>
                        <p>Sundays are meant to be relaxing and fun. We play games, shoot the ball, and 
                            often get out early to jump into the hot tub. This is a great time for 
                            beginners to come join us.
                        </p>
                    </div>
                </li>

            </ul>
        </div>
    </div>
  )
}

export default Schedule