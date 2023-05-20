import React from 'react'
import './About.css';
import MainBackImg from '../image/mynewpic-removebg-preview.png'
import {Link} from 'react-router-dom'
import {Home} from './home'
export const About = () => {
  return (
    <div>
      <div className='my-info-container2'>
        <div className="about1">
          <div className="first-left-div">
        <h1>
          About Me
        </h1>
           <div  className='details-row'> <h1>name:</h1>Radhe Saini </div>
          <div  className='details-row'><h1>hieghest Qualification:</h1>B.Tech </div>
        <div className='details-row'><h1>Current Organization:</h1>Vectorflow </div>
        <div className='details-row'><h1>Specialization:</h1>React, Python, C, JavaScript, html5, css3, SQL, NoSQL and other front End Frameworks </div>
        <div className='details-row'><h1>Age:</h1>24 </div>
        <div className='details-row'><h1>Year Of Experience:</h1>3 </div>
        <div className='details-row'><h1>From:</h1>Jaipur </div>
        </div>
        <div className="second-right-div">
          <img src={MainBackImg} className='pic-my1'>
          </img>
        <div className="action-btn">

          <Link className="resume-view-btn">
            View Resume 
          </Link>
          <Link className="resume-download-btn">
            Download Resume
          </Link>
        </div>
        </div>


      </div>
    </div>
    <Home name="radhe" />
    </div >
  )
}
