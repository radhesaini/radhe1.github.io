import React from 'react'
import './TopNav.css'
import { BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom'

export const TopNav = () => {
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
    </div>
  )
}
