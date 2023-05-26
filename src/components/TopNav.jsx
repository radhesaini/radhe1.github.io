import React, { useEffect, useState } from 'react'
import './TopNav.css'
import { BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'

export const TopNav = () => {
  const [isCollapse, setCollapse] = useState(false);
  return (
    <div className='topnav-main'>
        <div className="left">
            Radhe
        </div>
          
          <div className="right">
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/experiences">Experiences</Link>
              <Link to="/contacts">Contact</Link>
          </div>
          <div className="right-btn">
            <FiMenu color="white" onClick={()=>setCollapse(!isCollapse)}></FiMenu>
          </div> 
     <div className={isCollapse ? "right1" : "right-hide"} >
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/experiences">Experiences</Link>
              <Link to="/contacts">Contact</Link>
          </div>
    </div>
  )
}
